import { Recipe } from "./recipe.model";
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Subject } from "rxjs/Subject";


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    // recipes: Recipe[] =[
    //     new Recipe('Tasty toast', 'this is simply test',
    //     'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg',
    //     [
    //         new Ingredient('Meat',1),
    //         new Ingredient('French Fries', 20)
    //     ]),
    //     new Recipe('Big fat burger', 'this is simply best',
    //     'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg',
    //     [
    //         new Ingredient('buns', 2),
    //         new Ingredient('meat', 1)
    //     ])
    //   ];
    private recipes:Recipe[] = [];
      constructor(private slService:ShoppingListService){

      }

      setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      
      getRecipes(){
          return this.recipes.slice();
      }

      getReciepe(index:number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredientsTo(ingredients);
      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe: Recipe){
          this.recipes[index]= newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}