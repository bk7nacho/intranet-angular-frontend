import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() leyenda = 'Nombre del Grafico';
  @Input('label') doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData:number[] = [350, 450, 100];
  @Input('type') doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
