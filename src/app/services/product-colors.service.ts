import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductColorsService {

  productColors = [
    {

      // Gucci Box Logo T-shirt

      //Camel

      id: 1,
      product_id: 6,
      color_id: 2,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/camel/gallery_01.png'
    },
    {
      id: 2,
      product_id: 6,
      color_id: 2,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/camel/gallery_02.png'
    },
    {
      id: 3,
      product_id: 6,
      color_id: 2,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/camel/gallery_03.png'
    },
    {
      id: 4,
      product_id: 6,
      color_id: 2,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/camel/gallery_04.png'
    },


    // Black

    {
      id: 5,
      product_id: 6,
      color_id: 1,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/black/gallery_01.png'
    },
    {
      id: 6,
      product_id: 6,
      color_id: 1,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/black/gallery_02.png'
    },
    {
      id: 7,
      product_id: 6,
      color_id: 1,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/black/gallery_03.png'
    },
    {
      id: 8,
      product_id: 6,
      color_id: 1,
      image: 'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/black/gallery_04.png'
    },


    // Amiri T-Shirt Box Logo

    // Black

    {
      id: 9,
      product_id: 8,
      color_id: 1,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/black/gallery_01.jpg'
    },
    {
      id: 9,
      product_id: 8,
      color_id: 1,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/black/gallery_02.jpg'
    },
    {
      id: 9,
      product_id: 8,
      color_id: 1,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/black/gallery_03.jpg'
    },
    {
      id: 9,
      product_id: 8,
      color_id: 1,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/black/gallery_04.jpg'
    },

    // Blue Gray

    {
      id: 10,
      product_id: 8,
      color_id: 3,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/blue-gray/gallery_01.png'
    },
    {
      id: 11,
      product_id: 8,
      color_id: 3,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/blue-gray/gallery_02.png'
    },
    {
      id: 12,
      product_id: 8,
      color_id: 3,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/blue-gray/gallery_03.png'
    },
    {
      id: 13,
      product_id: 8,
      color_id: 3,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/blue-gray/gallery_04.png'
    },

    // 100 White

    {
      id: 14,
      product_id: 8,
      color_id: 4,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/100-white/gallery_01.png'
    },
    {
      id: 15,
      product_id: 8,
      color_id: 4,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/100-white/gallery_02.png'
    },
    {
      id: 16,
      product_id: 8,
      color_id: 4,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/100-white/gallery_03.png'
    },
    {
      id: 17,
      product_id: 8,
      color_id: 4,
      image: 'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/100-white/gallery_04.png'
    },


    // Cardigan CARAGH

    // Beige

    {
      id: 18,
      product_id: 7,
      color_id: 5,
      image: 'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/beige/gallery_01.png'
    },
    {
      id: 19,
      product_id: 7,
      color_id: 5,
      image: 'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/beige/gallery_02.png'
    },
    {
      id: 20,
      product_id: 7,
      color_id: 5,
      image: 'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/beige/gallery_03.png'
    },
    {
      id: 21,
      product_id: 7,
      color_id: 5,
      image: 'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/beige/gallery_04.png'
    },

    // Crossbody LOLA

    {
      id: 22,
      product_id: 5,
      color_id: 1,
      image: 'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/black/gallery_01.png'
    },
    {
      id: 23,
      product_id: 5,
      color_id: 1,
      image: 'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/black/gallery_02.png'
    },
    {
      id: 24,
      product_id: 5,
      color_id: 1,
      image: 'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/black/gallery_03.png'
    },
    {
      id: 25,
      product_id: 5,
      color_id: 1,
      image: 'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/black/gallery_04.png'
    },


  ]

  constructor() { }

  getProductImages(productId: number): string[] {
    return this.productColors.filter(pc => pc.product_id === productId).map(pc => pc.image);
  }

  getProductImagesByColor(productId: number, colorId: number): string[] {
    return this.productColors.filter(pc => pc.product_id === productId && pc.color_id === colorId).map(pc => pc.image);
  }
}
