import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected  = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'this is a dummy', 'https://picsum.photos/200/300'),
        new Recipe('Another  Recipe', 'this is a dummy too', 'https://picsum.photos/200/300')  
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    constructor() { }
    
}