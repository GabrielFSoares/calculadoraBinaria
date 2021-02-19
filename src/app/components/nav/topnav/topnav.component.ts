import { Component, OnInit, NgModule } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  faBars = faBars;
  display = '';

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    if(this.display === 'block' || this.display === '') {
      this.display = 'none';
    } else {
      this.display = 'block';
    }
  }

  onResize(event) {
    if(event.target.innerWidth <= 847) {
      this.display = 'none';
    } else if (event.target.innerWidth > 847) {
      this.display = 'block';
    }
  }
}
