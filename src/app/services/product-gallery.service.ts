import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductGalleryService {
  productGallery = [
    {
      id: 1,
      product_id: 8,
      galleryImages: [
        'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/gallery_01.jpg',
        'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/gallery_02.jpg',
        'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/gallery_03.jpg',
        'assets/img/products/amiri/shirts/jpg/amiri-shirt-6/gallery/gallery_04.jpg'
      ]
    },
    {
      id: 2,
      product_id: 7,
      galleryImages: [
        'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/gallery_01.png',
        'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/gallery_02.png',
        'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/gallery_03.png',
        'assets/img/products/burberry/cardigans/jpg/burberry-cardigan-1/gallery/gallery_04.png',
      ]
    },
    {
      id: 3,
      product_id: 6,
      galleryImages: [
        'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/gallery_01.png',
        'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/gallery_02.png',
        'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/gallery_03.png',
        'assets/img/products/gucci/shirts/jpg/gucci-shirt-1/gallery/gallery_04.png',
      ]
    },
    {
      id: 4,
      product_id: 5,
      galleryImages: [
        'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/gallery_01.png',
        'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/gallery_02.png',
        'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/gallery_03.png',
        'assets/img/products/burberry/crossbody-bags/jpg/burberry-crossbody-bag-1/gallery/gallery_04.png',
      ]
    },
  ];

  constructor() { }

  getProductGallery(productId: number) {
    const productGallery = this.productGallery.find(item => item.product_id === productId);
    return productGallery ? productGallery.galleryImages : [];
  }
}
