import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { Project } from '../../../interfaces/project';
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements AfterViewInit, OnInit {
  @Input() project!: Project;
  @Input() index: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Aos.init({
      startEvent: 'scroll'
    });
  }

  isReverseRow(index: number): boolean {
    return index % 2 === 1;
  }

}
