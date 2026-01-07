import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../Service/dashboard.service';
import { DashboardCard } from '../../models/dashboard.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  cards: DashboardCard[] = [
    { label: 'ok', count: 0, color: 'green' },
    { label: 'alert', count: 0, color: 'orange' },
    { label: 'danger', count: 0, color: 'red' },
    
  ];

 constructor(private dashboardService: DashboardService,
            private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardCounts().subscribe({
      next: data => {
          console.log(data.alert);
        this.cards[0].count = data.ok;
        this.cards[1].count = data.alert;
        this.cards[2].count = data.danger;
        this.cd.detectChanges(); 
      },
      error: err => console.error(err)
    });
  }
}
