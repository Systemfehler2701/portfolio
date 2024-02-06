import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { Skill } from '../../interfaces/skill';
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit, OnInit {

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Aos.init({
      startEvent: 'scroll'
    });
  }

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
