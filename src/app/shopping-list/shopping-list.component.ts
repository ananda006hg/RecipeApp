import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import * as shoppingListActions from './shopping-edit/store/shopping-list.actions';
import * as  fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Observable<{ingredients:Ingredient[]}>;

private igChangedSub: Subscription;
  constructor(private store: Store<fromApp.AppState>) { 

  }

  ngOnInit(): void {
    this.ingredients  = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.igChangedSub = this.slService.ingredientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )
  }

  onEditItem(index:number){
    //this.slService.startedEditing.next(index);
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }

  ngOnDestroy(): void{
   // this.igChangedSub.unsubscribe();
  }


}
