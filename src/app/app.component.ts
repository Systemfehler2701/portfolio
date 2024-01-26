import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    LandingpageComponent,
    FooterComponent,
    ImprintComponent,
    PrivacypolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
