import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catDetails = [{ imgUrl: '../../../assets/images/cat1.jpg', title: 'Cat 1', rating: 5 }, { imgUrl: '../../../assets/images/cat2.jpg', title: 'Cat 2', rating: 4 }, { imgUrl: '../../../assets/images/cat3.jpg', title: 'Cat 3', rating: 5 }, { imgUrl: '../../../assets/images/cat4.jpg', title: 'Cat 4', rating: 3 }];

  floatButtons = [{ label: 'canecl', icon: 'cancel' }, { label: 'fish', icon: 'fish' }, { label: 'like', icon: 'heart' }, { label: 'edit', icon: 'pen' }, { label: 'menu', icon: 'bars' }]
  constructor() { }

  ngOnInit() {
  }

}
