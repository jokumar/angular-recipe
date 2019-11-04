import {Ingredient, IngredientView} from './ingredient';

export class Recipe{
 public category: String;
 public cost: String;
 public name: String;
 public description: String;
 public imagePath: String;
 public ingredients: Array<Ingredient | IngredientView> = [];

 constructor(recipe?: Recipe | RecipeView | any){

   if(recipe) {
     this.cost = recipe.cost;
     this.category = recipe.category;
     this.name = recipe.name;
     this.description = recipe.description;
     this.imagePath = recipe.path;
     this.ingredients = recipe.ingredients;
   }
 }

}

export class RecipeView extends Recipe {
 constructor(recipe?: Recipe | RecipeView | any) {
   super(recipe);
  }
}


