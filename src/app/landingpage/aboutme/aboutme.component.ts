import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ButtonComponent, RouterLink, TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Aos.init({
      startEvent: 'scroll'
    });
  }
}
