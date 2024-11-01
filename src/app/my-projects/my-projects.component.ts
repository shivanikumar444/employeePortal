import { Component } from '@angular/core';
import { CurrentProjectsComponent } from '../current-projects/current-projects.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CurrentProjectsComponent, ProjectDetailsComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

}
