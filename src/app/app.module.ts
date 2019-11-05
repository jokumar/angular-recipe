import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HomeComponent } from './user/home/home.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { routingModule } from './app.routing';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IngredientComponent } from './ingredients/ingredient/ingredient.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './keycloak-init';

import {AuthenticationService} from './services/authentication.service';
import { ProfileComponent } from './user/profile/profile.component';
@NgModule({
 declarations: [
   AppComponent,
   HeaderComponent,
   RecipesComponent,
   RecipeListComponent,
   RecipeDetailComponent,
   RecipeItemComponent,
   HomeComponent,
   RecipeCreateComponent,
   IngredientComponent,
   IngredientListComponent,
   ProfileComponent
   ],
 imports: [
   BrowserModule,
   routingModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   KeycloakAngularModule
 ],
 providers: [
   AuthenticationService,
   {
     provide: APP_INITIALIZER,
     useFactory: initializer,
     multi: true,
     deps: [KeycloakService]
   }

 ]
 ,
 bootstrap: [AppComponent]
})
export class AppModule { }

