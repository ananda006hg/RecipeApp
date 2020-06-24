import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe: Recipe;
id: number;
  constructor(private recipeSer:RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeSer.getReciepe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeSer.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
   //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
   
  }
  deleteRecipe(){
    this.recipeSer.deleteRecipe(this.id);
    this.router.navigate(['./reciepes']);
  }

}
