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
      img: "html",
      name: "HTML",
    },
    {
      img: "css",
      name: "CSS",
    },
    {
      img: "js",
      name: "JavaScript",
    },
    {
      img: "ts",
      name: "TypeScript",
    },
    {
      img: "angular",
      name: "Angular",
    },
    {
      img: "python",
      name: "Python",
    },
    {
      img: "django",
      name: "Django",
    },
    {
      img: "php",
      name: "Php",
    },
    {
      img: "laravel",
      name: "Laravel",
    },
    {
      img: "git",
      name: "GIT",
    },
    {
      img: "api",
      name: "Rest-API",
    },
    {
      img: "scrum",
      name: "Scrum",
    },
    {
      img: "material",
      name: "Material design",
    },
    {
      img: "firebase",
      name: "Firebase",
    },
  ];


}
