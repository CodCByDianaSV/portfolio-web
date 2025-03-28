import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { AboutComponent } from "./Components/about/about.component";
import { ProjectsComponent } from "./Components/projects/projects.component";
import { SkillsComponent } from "./Components/skills/skills.component";
import { ContactComponent } from "./Components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-portafolio-angular';
}
