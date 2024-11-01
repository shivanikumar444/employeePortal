import { Component } from '@angular/core';
import { LeaveStatusComponent } from '../leave-status/leave-status.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-info',
  standalone: true,
  imports: [LeaveStatusComponent, MatIconModule],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent {

}
