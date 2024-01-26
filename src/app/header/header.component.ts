import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  showBurgerMenu = false;
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
}
