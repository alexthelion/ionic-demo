import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }

}
