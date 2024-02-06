import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
  translate!: TranslateService;

  constructor(private responsive: BreakpointObserver, translate: TranslateService) {
    this.translate = translate;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }


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
