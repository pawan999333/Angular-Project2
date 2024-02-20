import { Component } from '@angular/core';
import {faTrash,faEdit, faCalendarDays} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {
  icon = faCalendarDays;
}
