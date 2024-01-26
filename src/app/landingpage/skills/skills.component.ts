import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { Skill } from '../../interfaces/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  mySkills: Skill[] = [
    {
      img: "angular",
      name: "Angular",
    },
    {
      img: "ts",
      name: "TypeScript",
    },
    {
      img: "js",
      name: "JavaScript",
    },
    {
      img: "html",
      name: "HTML",
    },
    {
      img: "firebase",
      name: "Firebase",
    },
    {
      img: "git",
      name: "GIT",
    },
    {
      img: "css",
      name: "CSS",
    },
    {
      img: "api",
      name: "Rest-Api",
    },
    {
      img: "scrum",
      name: "Scrum",
    },
    {
      img: "material",
      name: "Material design",
    },
  ];


}
