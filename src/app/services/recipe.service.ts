import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Recipe, RecipeView} from '../types/recipe';
import { environment } from '../../environments/environment';
import {Ingredient, IngredientView} from '../types/ingredient';
@Injectable({
 providedIn: 'root'
})
export class RecipeService{
 constructor(private http: HttpClient){}
  url: string = environment.recipeService;

 public getRecipes(ownerId?: string): Observable< Array< RecipeView > > {
    return Observable.create((observer) => {
     this.http.get(this.url + '/' , {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'

       }),
       observe: 'body',
     })
       .subscribe(
         (res: Array<Recipe>) => {
           const recipes: Array<RecipeView> = [];
           res = res ? res : [];
           res.forEach((recipe: Recipe) => {
             recipes.push(new RecipeView(recipe));
           });
           observer.next(recipes);
           observer.complete();

         },
         (error) => {
           console.log(JSON.stringify(error));
           observer.error(error);
           observer.complete();
         });
   });
 }


 public getIngredients(ownerId?: string): Observable< Array< IngredientView > > {
   return Observable.create((observer) => {
     this.http.get(this.url + '/ingredient', {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'

       }),
       observe: 'body',
     })
       .subscribe(
         (res: Array<Ingredient>) => {
           const ingredients: Array<IngredientView> = [];
           res = res ? res : [];
           res.forEach((ingredient: Ingredient) => {
             ingredients.push(new IngredientView(ingredient));
           });
           observer.next(ingredients);
           observer.complete();

         },
         (error) => {
           console.log(JSON.stringify(error));
           observer.error(error);
           observer.complete();
         });
   });
 }



 public createRecipes(recipe: Recipe): Observable< RecipeView > {
   return Observable.create((observer) => {
     this.http.post(this.url + '/', recipe,{
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       }),
       observe: 'body',
     })
       .subscribe(
         (res: Recipe) => {
           observer.next(res);
           observer.complete();
          },
         (error) => {
           console.log(JSON.stringify(error));
           observer.error(error);
           observer.complete();
         });
   });
 }


 public createIngredients(ingredient: Ingredient): Observable< RecipeView > {
  return Observable.create((observer) => {
     this.http.post(this.url + '/ingredient', ingredient,{
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       }),
       observe: 'body',
     })
       .subscribe(
         (res: Ingredient) => {
           observer.next(res);
           observer.complete();
         },
         (error) => {
           console.log(JSON.stringify(error));
           observer.error(error);
           observer.complete();
         });
   });
 }
}

