import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutmeComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent { }
