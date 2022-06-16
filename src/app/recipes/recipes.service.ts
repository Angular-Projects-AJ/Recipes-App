import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shooping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Backzutaten_041.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/McD-McChicken_%28infobox%29.png/2560px-McD-McChicken_%28infobox%29.png',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2)
        ]),
    ];

    constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice(); //will return a COPY of the array recipes not the reference of it.
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}