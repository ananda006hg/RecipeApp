import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map,tap } from "rxjs/operators";
@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeSer:RecipeService) {}

    storeRecipe(){
        const recipes = this.recipeSer.getRecipes();
        this.http.put('https://recipe-book-a9cf0.firebaseio.com/recipes.json',recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://recipe-book-a9cf0.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipe =>{
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients:[]};
            });
        }),
        tap(recipes => {
            this.recipeSer.setRecipes(recipes);
        })
        )
    }
}