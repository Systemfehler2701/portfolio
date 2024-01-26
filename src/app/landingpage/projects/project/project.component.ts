import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { Project } from '../../../interfaces/project';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() index: number = 0;

  isReverseRow(index: number): boolean {
    return index % 2 === 1;
  }

}
