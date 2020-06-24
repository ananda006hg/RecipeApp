import { NgModule } from "@angular/core";
import { AuthGaurd } from "../auth/auth-gaurd";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { Routes, RouterModule } from "@angular/router";


const appRoutes : Routes = [
    {path: 'reciepes', component: RecipesComponent,
    canActivate:[AuthGaurd],
    children:[
        {path:'', component: RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {
            path:':id', 
            component: RecipeDetailsComponent, 
            resolve: [RecipesResolverService] 
        },
        {
            path:':id/edit',
            component:RecipeEditComponent,
            resolve:[RecipesResolverService]
        }
    ]}
    ];
@NgModule({
imports:[
    RouterModule.forChild(appRoutes)
],
exports:[
    RouterModule
]
})
export class RecipesRoutingModule {

}