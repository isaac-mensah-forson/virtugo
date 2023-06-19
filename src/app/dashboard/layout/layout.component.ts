import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../services/dashboard-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  navIsClosed = false;

  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit(): void {
    if (window.screen.width < 1025) {
      this.dashboardService.navIsClosed.next(true)
      this.navIsClosed = this.dashboardService.navIsClosed.value
    }
    this.dashboardService.navIsClosed.subscribe(
      res => {
        this.navIsClosed = res
      }
    )
  }

  closeNavByTouch() {
    if (window.screen.width < 1025) {
      this.dashboardService.navIsClosed.next(true)
    }
  }

}
