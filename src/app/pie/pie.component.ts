import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  graph1: any = {
    data: [
      {
        type: 'pie',
        values: [2, 3, 4, 4],
        labels: ['Wages ', 'Operating expenses ', 'Cost of sales ', 'Insurance '],
        textinfo: 'label+percent ',
        textposition: 'outside ',
        automargin: true
      },
    ],
    layout: {

      title: 'Pie Chart',

    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
