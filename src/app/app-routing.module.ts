import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules} from "@angular/router";

 

const appRoutes : Routes = [
    {path:'', redirectTo:'/reciepes', pathMatch: 'full'},
    {path: 'reciepes', loadChildren:() => import('./recipes/recipes.module')
    .then(m => m.ReciepesModule)},
    {path:'auth',loadChildren:() => import('./auth/auth.module')
    .then(m => m.AuthModule)},
    {path:'shopping-list',loadChildren:() => import('./shopping-list/shopping-list.module')
    .then(m => m.ShoppingListModule)}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule {

}