import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() stars = [1, 2, 3, 4, 5];
  @Input() rating = 0;
  @Output() selectedRating = new EventEmitter();
  Arr = Array;
  constructor() { }

  ngOnInit() {
  }

  countStar(star) {
    this.rating = star;
    this.selectedRating.emit(star);
  }
}
