import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as RecipesActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/shopping-edit/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe: Recipe;
id: number;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.route.params.pipe(map(params => {
        return +params['id'];
    }),switchMap(id => {
        this.id = id;
        return this.store.select('recipes');
    }),map(recipesState =>{
        return recipesState.recipes.find((recipe, index) =>{
        return  index === this.id;
    });
    })).subscribe(recipe =>{
            this.recipe = recipe;
        })
  };


  onAddToShoppingList(){
    //this.recipeSer.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients))
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
   //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
   
  }
  deleteRecipe(){
   // this.recipeSer.deleteRecipe(this.id);
   this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['./reciepes']);
  }

}
