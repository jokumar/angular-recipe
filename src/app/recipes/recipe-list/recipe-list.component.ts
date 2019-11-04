import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Recipe, RecipeView} from '../../types/recipe';
import {RecipeService} from '../../services/recipe.service';


@Component({
 selector: 'app-recipe-list',
 templateUrl: './recipe-list.component.html',
 styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Array<RecipeView> = [];

 @Output() emitRecipe = new EventEmitter<Recipe>();

 onRecipeSelect(event: Recipe){
  this.emitRecipe.emit(event);

 }
 constructor( public recipeService: RecipeService) { }

 ngOnInit() {
     this.recipeService.getRecipes().subscribe(recipe => {
       this.recipes = recipe;
     }, error => {
         console.error('Failed to retrieve recipe');
         this.recipes = [];
       });

 }

}


