import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as  fromApp from '../../store/app.reducer';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode = false;
  editedItem:Ingredient;
  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {

    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
        if(stateData.editedIngredientIndex >  -1) {
            this.editMode = true;
            this.editedItem = stateData.editedIngredient;
            this.slForm.setValue({
                name : this.editedItem.name,
                amount : this.editedItem.amount
              })
        } else {
            this.editMode = false;
        }

    })

  }
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.store.dispatch(new ShoppingListActions.UpdateIngredients(newIngredient));
      //this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      //this.slService.addIngredients(newIngredient)
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }
  onDelete(){
    //this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredients());

    this.onClear();
  
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StoptEdit);
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
  this.store.dispatch(new ShoppingListActions.StoptEdit);
}

}
