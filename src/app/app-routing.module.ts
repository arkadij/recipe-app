import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddNewRecipeComponent } from "./core-components/recipe/add-new-recipe/add-new-recipe.component";

import { RecipeDetailComponent } from "./core-components/recipe/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./core-components/recipe/recipe-list/recipe-list.component";
import { RecipeComponent } from "./core-components/recipe/recipe.component";
import { StartComponent } from "./core-components/recipe/start/start.component";
import { ShoppingListEditComponent } from "./core-components/shopping/shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./core-components/shopping/shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {
        path:'',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path:'recipes',
        component: RecipeComponent,
        children: [
            {
                path: '',
                component:StartComponent
            },
            {
                path: 'recipe-list',
                component: RecipeListComponent
            },
            {
                path: 'add-new-recipe',
                component: AddNewRecipeComponent
            },
            {
                path: ':id',
                component: RecipeDetailComponent
            },
            {
                path: ':id/new-recipe-edit',
                component: AddNewRecipeComponent
            }  
        ]
    },
    {
        path:'shopping-list',
        component: ShoppingListComponent,
        children: [
            {
                path:':edit',
                component:ShoppingListEditComponent
            }
        ]
    },
    {
        path: 'not-found',
        component: PageNotFoundComponent,
        data: { message: '404'}
    },
    {
        path: '**',
        redirectTo: 'not-found',
        pathMatch:'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}