import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core-components/header/header.component';
import { ShoppingListComponent } from './core-components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './core-components/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './core-components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './core-components/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './core-components/recipe/recipe-detail/recipe-detail.component';
import { NavbarComponent } from './core-components/navbar/navbar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeComponent } from './core-components/recipe/recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddNewRecipeComponent } from './core-components/recipe/add-new-recipe/add-new-recipe.component';
import { StartComponent } from './core-components/recipe/start/start.component';
import { RecipeEditComponent } from './core-components/recipe/recipe-edit/recipe-edit.component';



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
    RecipeComponent,
    PageNotFoundComponent,
    AddNewRecipeComponent,
    StartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
