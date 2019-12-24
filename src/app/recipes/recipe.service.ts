import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is the description of the recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrqjYM-oYUOEx6waSvFsm7HXgq_iR1fXlIzzKS9FcPYhpET5YuA&s'),
    new Recipe('Test2', 'Another Test', 'https://www.researchgate.net/profile/Man-Kwan_Shan/publication/287185455/figure/tbl1/AS:669317968453647@1536589247675/A-list-of-five-recipes-of-Spanish-cuisine-with-their_Q640.jpg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
