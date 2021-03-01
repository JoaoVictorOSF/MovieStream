import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hide-menu',
  templateUrl: './hide-menu.component.html',
  styleUrls: ['./hide-menu.component.scss']
})
export class HideMenuComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  goHome(){
    this.route.navigate([`/`])
  }
}
