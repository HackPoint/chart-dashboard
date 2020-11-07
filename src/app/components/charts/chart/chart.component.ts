import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'cd-chart',
  templateUrl: './chart.component.html',
  styleUrls: [ './chart.component.scss' ]
})
export class ChartComponent implements OnInit {
  @Input() chartType: ChartType;
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public chartLabels: Label[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
  public chartLegend = true;
  public chartPlugins = [];

  public chartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ];

  constructor() {
  }

  ngOnInit() {
    this.chartType = this.chartType;
  }

}
