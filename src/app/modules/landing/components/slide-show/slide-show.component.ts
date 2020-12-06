import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  imageUrlArray: string[] = [
    '../../../assets/images/carusel1.png',
    '../../../assets/images/carusel1.png',
    '../../../assets/images/carusel1.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}
