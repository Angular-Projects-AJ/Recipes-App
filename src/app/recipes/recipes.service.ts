import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Backzutaten_041.jpg'),
        new Recipe('Another test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/McD-McChicken_%28infobox%29.png/2560px-McD-McChicken_%28infobox%29.png'),
    ];

    getRecipes() {
        return this.recipes.slice(); //will return a COPY of the array recipes not the reference of it.
    }

}