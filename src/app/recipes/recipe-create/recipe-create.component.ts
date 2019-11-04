import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import { Router} from '@angular/router';
import {Recipe} from '../../types/recipe';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Ingredient, IngredientView} from '../../types/ingredient';
@Component({
 selector: 'app-recipe-create',
 templateUrl: './recipe-create.component.html',
 styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

 constructor(  private _fb: FormBuilder, public recipeService: RecipeService, public router: Router) { }

 recipeForm: FormGroup;
 ingredients: Ingredient[];
 selectedValue : any;

 ngOnInit() {

   this.recipeForm = this._fb.group({
     recipe_name: ['', [Validators.required, Validators.minLength(3)]],
     recipe_desc: ['', [Validators.required, Validators.minLength(3)]],
     ingredient_array: this._fb.array([this._fb.group({ingredients: '', quantity : ''})])
   });
   this.recipeService.getIngredients().subscribe(ig => {
     this.ingredients = ig ;
   });
 }

 addIngredient(){
   this.ingredientArray.push(this._fb.group({ingredients: '', quantity : ''}));
 }

 deleteIngredient(index){
   this.ingredientArray.removeAt(index);
 }

 get ingredientArray(){
   return this.recipeForm.get('ingredient_array') as FormArray;
 }

 onOptionSelected( data: string) {
   console.log(data);
   this.selectedValue = data;
 }
 public createRecipe(form: NgForm){
   const value = form.value;
   const recipe = new Recipe();
   recipe.name = value.recipe_name;
   recipe.description = value.recipe_desc;
   this.ingredientArray.value.forEach(function (ingredientItem){
     ingredientItem.ingredients.quantity = ingredientItem.quantity;
     recipe.ingredients.push(ingredientItem.ingredients);
   })

     this.recipeService.createRecipes(recipe).subscribe(r => {
       if ( r != null ) {
         this.router.navigate(['/recipes']);
       }
   }, error => {
     console.error('Failed to retrieve recipe');
   });
   form.reset();
 }

}

