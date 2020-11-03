import { Component, Input, OnInit } from '@angular/core';

export type ChartType = 'line' | 'bar';

@Component({
  selector: 'cd-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: [ './chart-container.component.scss' ]
})
export class ChartContainerComponent implements OnInit {
  @Input() chartType: ChartType;
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
