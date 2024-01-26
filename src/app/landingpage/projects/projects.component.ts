import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      img: "sharkie",
      title: "Sharkie",
      skills: "JavaScript | HTML | CSS",
      info: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
      demo: "https://marnie-lindenthal.developerakademie.net/Sharkie/",
      git: "https://github.com/Systemfehler2701/Sharky",
    },
    {
      img: "pokedex",
      title: "Pokedex",
      skills: "JavaScript | HTML | CSS | Api",
      info: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      demo: "https://marnie-lindenthal.developerakademie.net/Pokedex/",
      git: "https://github.com/Systemfehler2701/Pokedex",
    },
    {
      img: "join",
      title: "Join",
      skills: "Angular | TypeScript | HTML | CSS | Firebase ",
      info: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      demo: "https://marnie-lindenthal.developerakademie.net/Join/",
      git: "https://github.com/Systemfehler2701/Join",
    }
  ]
}
