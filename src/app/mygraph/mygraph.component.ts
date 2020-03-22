import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';

import * as shape from 'd3-shape';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mygraph',
  templateUrl: './mygraph.component.html',
  styleUrls: ['./mygraph.component.scss']
})
export class MygraphComponent implements OnInit {
  // hierarchialGraph = { nodes: [], links: [] };
  // curve = shape.curveBundle.beta(1);
  milestoneBackground = '#99ccff';
  milestoneText = '#ff0000';
  nodeBackground = '#ff80ff';
  nodeText = '#0000cc';
  lineColor = '#333333';

  @ViewChild('node1') node1: ElementRef;
  curve: any = shape.curveLinear;
  layout = 'dagre';
  draggingEnabled = true;
  panningEnabled = true;
  zoomEnabled = true;

  zoomSpeed = 0.1;
  minZoomLevel = 0.1;
  maxZoomLevel = 4.0;
  panOnZoom = true;

  autoZoom = false;
  autoCenter = false;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  nodes: Node[] = [
    {
      id: '1',
      label: 'Milestone ABCDEFGHIJK',
      data: {
        nodeType: 'Milestone',
        backgroundColor: '#99ccff',
        color: 'black',
      }
    },
    {
      id: '2',
      label: 'Task B',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
    {
      id: '3',
      label: 'Task C',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
    {
      id: '4',
      label: 'Task D',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
    {
      id: '5',
      label: 'Task E',
      data: {
        nodeType: 'Task',
        backgroundColor: '#ff80ff',
        color: 'black'
      }

    },
     {
      id: '6',
      label: 'Milestone F',
       data: {
         nodeType: 'Milestone',
         backgroundColor: '#99ccff',
         color: 'black'
       }

    }
  ];

  links: Edge[] = [
    {
      id: 'a',
      source: '1',
      target: '2',
      label: 'Between 1 and 2'
    }, {
      id: 'b',
      source: '1',
      target: '3'
    }, {
      id: 'c',
      source: '3',
      target: '4',
      label: 'Between 3 & 4'
    }, {
      id: 'd',
      source: '3',
      target: '5'
    }, {
      id: 'e',
      source: '4',
      target: '5'
    }, {
      id: 'f',
      source: '2',
      target: '6'
    }
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  public getStyles(node: Node): any {
    return {
      'background-color': node.data.backgroundColor,
    };
  }

  onChangeGraph() {
    this.nodes[0].label = 'Dragon';
    this.nodes[1].label = 'Cat';
    this.nodes[2].label = 'Dog';
    this.nodes[3].label = 'Bunny';
    this.nodes[4].label = 'Horse';
    this.nodes[5].label = 'Goat';
    this.nodes = [...this.nodes];
  }

  onNodeClick($event) {
    console.log('Im node ' + $event.label + 'and I was clicked!');

  }

  onLineClick($event) {
    console.log('I am a line between ' + $event.source  + ' and ' + $event.target + ' and I was clicked!');
  }

}
