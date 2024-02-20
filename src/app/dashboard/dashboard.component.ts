import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faTrash,faEdit, faCalendarDays} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router){}
  icon = faCalendarDays;

  managerDashboardPage(){
    this.router.navigate(['/manager-dashboard'])

  }
}
