import { Component, HostListener, Input, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-hide-menu',
  templateUrl: './hide-menu.component.html',
  styleUrls: ['./hide-menu.component.scss'],
  animations: [
    trigger('toggle', [
      state('shown', style({
        'display': 'flex'
      })),
      transition('hidden => shown', [
        style({
          'display': 'flex',
          transform: 'scale(0)'
        }),
        animate(200), style({
          'display': 'flex',
          'margin-top': '10px',
          transform: 'scale(1)'
        })
      ]),
      transition('shown => hidden', [
        style({
          'display': 'flex',
          transform: 'scale(1)'
        }),
        animate(200, style({
          'display': 'flex',
          transform: 'scale(0)'
        }))
      ])
    ])
  ]
})
export class HideMenuComponent implements OnInit {
  @Input() animationState
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
