import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from "../recipe.model";
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Backzutaten_041.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/McD-McChicken_%28infobox%29.png/2560px-McD-McChicken_%28infobox%29.png'),
    
  ];
 
  constructor(private recipeService: RecipeService) { 
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void {

  }
 
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }


}
