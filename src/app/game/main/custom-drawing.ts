import { Component, OnInit } from '@angular/core';


export class CustomDrawing implements OnInit {

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
      backgroundColor:[200,200,200]
    }
   }

  ngOnInit() {
    
  }

}
