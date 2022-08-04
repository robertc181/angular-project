import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe ('A test Recipe', 'This is simply a test', 'https://www.delicious.com.au/recipes/collections/gallery/60-indian-recipes-to-warm-you-up-this-winter/i66gak0q'),
    new Recipe ('A test Recipe', 'This is simply a test', 'https://www.delicious.com.au/recipes/collections/gallery/60-indian-recipes-to-warm-you-up-this-winter/i66gak0q'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
