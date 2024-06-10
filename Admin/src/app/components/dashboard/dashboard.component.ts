import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartType = 'line';

  chartDatasets = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Prix ' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Reservation' }
  ];

  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true
  };
  constructor() { }

  ngOnInit(): void {
  }
  chartClicked(event: any) {
    console.log(event);
  }

  chartHovered(event: any) {
    console.log(event);
  }
}

