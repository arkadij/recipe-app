import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected  = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'this is a dummy', 
            'https://picsum.photos/200/300',
            [
                new Ingredient('Meat', 1)
            ])
      ];
      constructor(private shoppingListService: ShoppingListService) { }
      

    getRecipes(){
        return this.recipes.slice();
    }

    addIngToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    
    
}