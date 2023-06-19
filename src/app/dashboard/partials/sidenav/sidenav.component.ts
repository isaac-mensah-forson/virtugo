import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../services/dashboard-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  navIsClosed = false;

  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit(): void {
    this.dashboardService.navIsClosed.subscribe(
      res => {
        this.navIsClosed = res
      }
    )
  }

  toggleNav() {
    this.navIsClosed = !this.navIsClosed
    this.dashboardService.navIsClosed.next(this.navIsClosed)
  }
}
