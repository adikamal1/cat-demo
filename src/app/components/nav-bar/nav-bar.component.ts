import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() links = [];
  showLinks = false;
  selectedLink = '';
  constructor() { }

  ngOnInit() {
    this.selectedLink = this.links[0];
  }
  onLinkClick(link) {
    this.showLinks = false;
    this.selectedLink = link;
  }
}
