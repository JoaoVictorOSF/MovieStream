import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-favorite',
  templateUrl: './heart-favorite.component.html',
  styleUrls: ['./heart-favorite.component.scss']
})
export class HeartFavoriteComponent implements OnInit {

  isFavorited = {};

  constructor() {
  }

  ngOnInit(): void {
  }
  toFavorite(){
    this.isFavorited = !this.isFavorited
  }
}