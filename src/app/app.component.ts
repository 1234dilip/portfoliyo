import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TechniclaComponent } from "./components/technicla/technicla.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationalDetailsComponent } from "./components/educational-details/educational-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AboutComponent, ProjectsComponent, ContactComponent, TechniclaComponent, ExperienceComponent, EducationalDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
