import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() title: string
  @Input() moviesList: []


  constructor() { }

  ngOnInit(): void {
    console.log(this.moviesList)
  }

}
