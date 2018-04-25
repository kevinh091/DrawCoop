import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-drawing',
  templateUrl: './custom-drawing.component.html',
  styleUrls: ['./custom-drawing.component.css']
})
export class CustomDrawingComponent implements OnInit {

  pen:{ color, width };
  canvas:{width, height, backgroundColor};

  constructor() {
    //default
    this.pen={
      color:[0,0,0],
      width: 2
    },
    this.canvas={
      width:900,
      height:600,
      backgroundColor:[90,90,90]
    }
   }

  ngOnInit() {
    
  }

}
