import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  ngAfterViewInit() {
    Aos.init({
      startEvent: 'scroll'
    });
  }
}
