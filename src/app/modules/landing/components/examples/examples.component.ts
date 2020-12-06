import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../model/book.model';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  books: BookModel[] = [
    {
    name: 'Calling Emma',
    image: 'https://static.wixstatic.com/media/84770f_ab56ff2a5af943339f7dc9091e4ae27d~mv2_d_1988_2666_s_2.png/v1/fill/w_292,h_392,al_c,q_85,usm_0.66_1.00_0.01/84770f_ab56ff2a5af943339f7dc9091e4ae27d~mv2_d_1988_2666_s_2.webp',
    price: '$55.00'
   },
    {
      name: 'Quite Ocean',
      image: 'https://static.wixstatic.com/media/84770f_c9fd9a614bc94403b59a4cd1e00e2a27~mv2_d_1988_2666_s_2.png/v1/fill/w_292,h_392,al_c,q_85,usm_0.66_1.00_0.01/84770f_c9fd9a614bc94403b59a4cd1e00e2a27~mv2_d_1988_2666_s_2.webp',
      price: '$50.00'
    },
    {
      name: 'Breaking Walls',
      image: 'https://static.wixstatic.com/media/84770f_4319cea23b7247efae5f8da12245b773~mv2_d_1988_2666_s_2.png/v1/fill/w_292,h_392,al_c,q_85,usm_0.66_1.00_0.01/84770f_4319cea23b7247efae5f8da12245b773~mv2_d_1988_2666_s_2.webp',
      price: '$55.00'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
