import { Ingredient } from "../shared/ingredients.model";
import { Subject } from 'rxjs';


export class ShoppingListService {
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
    private ingredients: Ingredient[] =[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
        
        ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredients(ingrdient:Ingredient){
        this.ingredients.push(ingrdient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientsTo(ingredients:Ingredient[]){
    // for(let ingrdient of ingrdients ) {
    //     this.addIngredients(ingrdient);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    }
      
    updateIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());

    }
    
}