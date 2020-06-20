import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] =[
  new Recipe('A test Recipe', 'this is simply test','https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
