import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { UpcomingHolidaysComponent } from './upcoming-holidays/upcoming-holidays.component';
import { ManagerActionsComponent } from './manager-actions/manager-actions.component';
import { MyActionsComponent } from './my-actions/my-actions.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    EmployeeInfoComponent,
    LeaveStatusComponent,
    UpcomingHolidaysComponent,
    ManagerActionsComponent,
    MyActionsComponent,
    CurrentProjectsComponent,
    ProjectDetailsComponent,
    UpcomingEventsComponent,
    MyProjectsComponent,
    MatToolbarModule, 
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeePortal';
}
