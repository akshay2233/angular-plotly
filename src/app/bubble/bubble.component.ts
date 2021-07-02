import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {
  graph1: any = {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      }
    ],
    layout: {
      title: 'Bubble Chart',

    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
