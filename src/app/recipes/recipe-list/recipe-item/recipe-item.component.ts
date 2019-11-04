import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../../types/recipe';


@Component({
 selector: 'app-recipe-item',
 templateUrl: './recipe-item.component.html',
 styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
@Output() slectedRecipeE=new EventEmitter<void>();

 constructor() { }

 ngOnInit() {


 }

 showRecipeDetail(){
   this.slectedRecipeE.emit();
 }
}

