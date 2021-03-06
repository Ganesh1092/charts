import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.createChartLine()
  }

  private createChartLine(): void {
    this.chartOptions = {
      credits: {
        enabled: false
      },
      series: [
        {
          type: "line",
          data: [1, 2, 3, 4, 5]
        }
      ]
    };
  }
}
