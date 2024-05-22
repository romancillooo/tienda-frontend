import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  colors = [
    {
      id: 1,
      name: 'Black',
      hex_code: '#000000'
    },
    {
      id: 2,
      name: 'Camel',
      hex_code: '#DEB58A'
    },
    {
      id: 3,
      name: 'Blue Gray',
      hex_code: '#C6D8E6'
    },
    {
      id: 4,
      name: '100 White',
      hex_code: '#FFFFFF'
    },
    {
      id: 5,
      name: 'Beige',
      hex_code: '#F8EDDC'
    },
  ]

  constructor() { }

  getColorById(colorId: number) {
    return this.colors.find(color => color.id === colorId);
  }

}
