import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Recipe} from '../../types/recipe';
import {Ingredient} from '../../types/ingredient';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';

@Component({
 selector: 'app-ingredient',
 templateUrl: './ingredient.component.html',
 styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
 ingredientForm: FormGroup;
 measuredTypes = [];

 constructor( private _fb: FormBuilder, public recipeService: RecipeService, public router: Router) { }

 ngOnInit() {
   this.measuredTypes = this.getMeasuredTypes();

   this.ingredientForm = this._fb.group({
     ingredient_name: new FormControl(''),
     pricePerUnit: new FormControl(''),
     measuredType: new FormControl(),
     });
 }


 getMeasuredTypes() {
   return [
     { id: '1', name: 'ml' },
     { id: '2', name: 'gm' }
   ];
 }
 public createIngredients(){
   const value = this.ingredientForm.value;
   const ingredients = new Ingredient();
   ingredients.name = value.ingredient_name;
   ingredients.measuredType = value.measuredType;
   ingredients.pricePerUnit = value.pricePerUnit;

   this.recipeService.createIngredients(ingredients).subscribe(r => {
     if ( r != null ) {
       this.router.navigate(['/recipes']);
     }
   }, error => {
     console.error('Failed to retrieve recipe');
   });

 }


}

