import { Component } from '@angular/core';
import { Food } from 'src/app/header/shared/models/Food';
import { Tag } from 'src/app/header/shared/models/Tag';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})


export class FoodComponent {
  constructor() {}

  getFoodById(id: number): Food{
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllTags():Tag[]{
    return[
      {name: "All", count:7},
      {name: "FastFood", count:3},
      {name: "Lunch", count:4},
      {name: "Soup", count:1},
      {name: "Pizza", count:1},
      {name: "Salad", count:1},
      {name: "Meat", count:2},
    ];
  }

  getAllFoodsByTag(tags: string):Food[]{
    if(tags == 'All'){
      return this.getAll();
    }else{
      return this.getAll().filter((food) => food.tags?.includes(tags));
    }
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'FrenchFrie',
        price:6,
        tags: ['FastFood', 'FrenchFrie'],
        favorite:false,
        stars:4,
        imagesURL: '/assets/images/foods/FrenchFrie.png',
        origins:['USA','AMERIMA'],
        cookTime: '20-30',
      },
      {
        id:2,
        name:'Hamburger',
        price:12,
        tags: ['FastFood', 'Meat'],
        favorite:true,
        stars:5,
        imagesURL: '/assets/images/foods/Hamburger.png',
        origins:['USA','AMERIMA'],
        cookTime: '10-30',
      },
      {
        id:3,
        name:'Salad',
        price:8,
        tags: ['Lunch', 'Salad'],
        favorite:true,
        stars:4.5,
        imagesURL: '/assets/images/foods/Salad.png',
        origins:['Italia','Rome','Greece'],
        cookTime: '2-5',
      },
      {
        id:4,
        name:'Meatball',
        price:15,
        tags: ['Meat'],
        favorite:false,
        stars:4,
        imagesURL: '/assets/images/foods/Meatball.png',
        origins:['Italia'],
        cookTime: '30-45',
      },
      {
        id:5,
        name:'Pizza',
        price:18,
        tags: ['Lunch','FastFood','Pizza'],
        favorite:true,
        stars:2,
        imagesURL: '/assets/images/foods/Pizza.png',
        origins:['Italia'],
        cookTime: '10-25',
      },
      {
        id:6,
        name:'Flower',
        price:20,
        tags: ['Lunch','Flower'],
        favorite:true,
        stars:5,
        imagesURL: '/assets/images/foods/Flower.png',
        origins:['Italia'],
        cookTime: '1-5',
      },
      {
        id:7,
        name:'Soup',
        price:12,
        tags: ['Lunch','Soup'],
        favorite:true,
        stars:3.6,
        imagesURL: '/assets/images/foods/Soup.png',
        origins:['Ukraine'],
        cookTime: '40-60',
      },
    ]
  }
}

