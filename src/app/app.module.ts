import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core-components/header/header.component';
import { ShoppingListComponent } from './core-components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './core-components/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './core-components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './core-components/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './core-components/recipe/recipe-detail/recipe-detail.component';
import { NavbarComponent } from './core-components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeComponent } from './core-components/recipe/recipe.component';
import { ShoppingListService } from './core-components/shopping/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    NavbarComponent,
    DropdownDirective,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
