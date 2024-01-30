import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        marginLeft: '0%',
      })),
      state('closed', style({
        marginLeft: '100%',
      })),
      transition('open <=> closed', [
        animate('0.25s')
      ])
    ]),
  ],
})
export class HeaderComponent implements OnInit {

  showBurgerMenu = false;
  showOverlayMenu = false;
  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.XSmall,
    ])
      .subscribe(result => {

        this.showBurgerMenu = false;

        if (result.matches) {
          this.showBurgerMenu = true;
        }
      });
  }

  showOverlay() {
    this.showOverlayMenu = true;
  }

  hideOverlay() {
    this.showOverlayMenu = false;
  }
}
