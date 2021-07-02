import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scattered',
  templateUrl: './scattered.component.html',
  styleUrls: ['./scattered.component.scss']
})
export class ScatteredComponent implements OnInit {
  graph1: any = {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'lines',
        type: 'lines'
      }, {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        type: 'scatter'
      }, {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines',
        type: 'scatter'
      }
    ],
    layout: { title: 'Scatter Chart' }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
