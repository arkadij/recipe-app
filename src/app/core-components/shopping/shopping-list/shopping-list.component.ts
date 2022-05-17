import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('test', 2)
  ];
  constructor() {
    console.log(this.ingredients);
   }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: {name: string, amount: number}){
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
}
