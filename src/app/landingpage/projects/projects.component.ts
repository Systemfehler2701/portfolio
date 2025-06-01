import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      img: "sharkie",
      title: "Sharkie",
      skills: "JavaScript | HTML | CSS",
      info: "PROJECT1.DESCRIPTION",
      demo: "https://sharkie.marnie-lindenthal.de",
      git: "https://github.com/Systemfehler2701/Sharky",
    },
    {
      img: "pokedex",
      title: "Pokedex",
      skills: "JavaScript | HTML | CSS | API",
      info: "PROJECT2.DESCRIPTION",
      demo: "https://pokedex.marnie-lindenthal.de",
      git: "https://github.com/Systemfehler2701/Pokedex",
    },
    {
      img: "join",
      title: "Join",
      skills: "JavaScript | HTML | CSS",
      info: "PROJECT3.DESCRIPTION",
      demo: "https://join.marnie-lindenthal.de/",
      git: "https://github.com/Systemfehler2701/Join",
    },
    {
      img: "dabubble",
      title: "DA Bubble",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      info: "PROJECT4.DESCRIPTION",
      demo: "https://dabubble.marnie-lindenthal.de/",
      git: "https://github.com/Systemfehler2701/DABubble",
    }
  ]
}
