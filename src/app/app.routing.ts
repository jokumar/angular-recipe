import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeCreateComponent} from './recipes/recipe-create/recipe-create.component';
import {RecipesComponent} from './recipes/recipes.component';
import {LoginComponent} from './user/login/login.component';
import {IngredientComponent} from './ingredients/ingredient/ingredient.component';
import {IngredientListComponent} from './ingredients/ingredient-list/ingredient-list.component';
import {AuthenticationService} from './services/authentication.service';
import {ProfileComponent} from './user/profile/profile.component';
const routes: Routes = [
 { path: 'recipe-create', component: RecipeCreateComponent , canActivate: [AuthenticationService]},
 { path: 'login', component: LoginComponent , canActivate: [AuthenticationService] },
 { path: 'recipes', component: RecipesComponent, canActivate: [AuthenticationService] },
 { path: 'ingredient-list', component: IngredientListComponent , canActivate: [AuthenticationService]},
 { path: 'ingredients', component: IngredientComponent , canActivate: [AuthenticationService]},
 { path: 'profile', component: ProfileComponent , canActivate: [AuthenticationService]},
 { path: '', component: LoginComponent},

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);


