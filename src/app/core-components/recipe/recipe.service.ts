import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';


@Injectable({providedIn: 'root'})
export class RecipeService {
    
    private recipes: Recipe[] = [
        
        new Recipe(
            'a test recipe',
            'yummi',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('fish', 2)
            ]),
        new Recipe(
            'a test recipe 2',
            'yummi gummy',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('fisherman', 2)
            ])
    ]   
    constructor(private shoppingListService: ShoppingListService) { }
      
    getRecipes(){
        return this.recipes;
    }

    getRecipe(index:number){
       return this.recipes[index];
    }

    addIngToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    } 
}