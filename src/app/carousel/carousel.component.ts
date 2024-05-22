import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: string[];

  constructor() {
    this.images = [
      'assets/img/carousel/burberry-carousel.jpeg',
      'assets/img/carousel/amiri-carousel.jpeg',
      'assets/img/carousel/ferragamo-carousel.png'
    ];
   }

  ngOnInit(): void {
  }

}
