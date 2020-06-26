import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredients.model';


export const ADD_INGREDIENT = '[shoppingList] Add ingredient';
export const ADD_INGREDIENTS = '[shoppingList] Add ingredients';
export const UPDATE_INGREDIENT = '[shoppingList] update ingredient';
export const DELETE_INGREDIENT = '[shoppingList] delete ingredient';
export const START_EDIT =  '[shoppingList] start edit';
export const STOP_EDIT =  '[shoppingList] stop edit';

export class AddIngredient implements Action {
        readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action {

    readonly type = ADD_INGREDIENTS;
    
    constructor(public payload: Ingredient[]){}
}

export class UpdateIngredients implements Action { 

    readonly type = UPDATE_INGREDIENT;
    
    constructor(public payload:Ingredient){}
}

export class DeleteIngredients implements Action { 

    readonly type = DELETE_INGREDIENT;
    
}

export class StartEdit implements Action { 

    readonly type = START_EDIT;
    
    constructor(public payload:number){}
}

export class StoptEdit implements Action { 

    readonly type = STOP_EDIT;
}





export type ShoppingListActions = 
|AddIngredient 
| AddIngredients 
| UpdateIngredients 
| DeleteIngredients 
| StartEdit 
|StoptEdit;