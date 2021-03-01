import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state('hidden', style({
        margin: '0px 0px 0px -100%'
      })),
      state('shown', style({
        margin: '0px 0px 0px 0px'
      })),
      transition('hidden => shown', [
        animate(200)
      ]),
      transition('shown => hidden', [
        animate(200)
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  animationState
  constructor( private route: Router) {
    this.animationState = 'hidden'
   }

  ngOnInit(): void {
  }
  goHome(){
    this.route.navigate([`/`])
  }
  onToggle(event: Event){
    event.stopPropagation()
    this.animationState === 'hidden' ? this.animationState = 'shown' : this.animationState = 'hidden'
  }
  @HostListener('document:click', ['$event']) clickout(event) {
    this.animationState = 'hidden'
  }
}
