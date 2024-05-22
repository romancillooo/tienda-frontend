import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories = [
    {
      id: 1,
      name: 'T-shirts',
      path: 't-shirts'
    },
    {
      id: 2,
      name: 'Hoodies & Sweatshirts',
      path: 'hoodies-sweatshirts'
    },
    {
      id: 3,
      name: 'Denim Jeans',
      path: 'denim-jeans'
    },
    {
      id: 4,
      name: 'Casual Shirts',
      path: 'casual-shirts'
    },
    {
      id: 5,
      name: 'Crossbody Bags',
      path: 'crossbody-bags'
    },
    {
      id: 6,
      name: 'Slides',
      path: 'slides'
    },
    {
      id: 7,
      name: 'Cardigans',
      path: 'cardigans'
    },
  ]

  constructor() { }

  getCategories() {
    return this.categories;
  }
  getCategoryById(categoryId: number) {
    return this.categories.find(category => category.id === categoryId);
  }
}
