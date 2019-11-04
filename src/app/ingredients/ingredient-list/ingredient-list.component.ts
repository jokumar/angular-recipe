
import { Component, OnInit } from '@angular/core';
import {RecipeView} from '../../types/recipe';
import {IngredientView} from '../../types/ingredient';
import {RecipeService} from '../../services/recipe.service';

@Component({
 selector: 'app-ingredient-list',
 templateUrl: './ingredient-list.component.html',
 styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
 ingredients: Array<IngredientView> = [];
 constructor(public recipeService: RecipeService) { }

 ngOnInit() {

   this.recipeService.getIngredients().subscribe(ig => {
     this.ingredients = ig;
   }, error => {
     console.error('Failed to retrieve ingredients');
     this.ingredients = [];
   });

 }

}
