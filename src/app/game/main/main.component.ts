import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import * as io from 'socket.io-client';
declare var p5: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  socket: SocketIOClient.Socket;
  myP: any;
  last_drew : point;

  constructor(private route: ActivatedRoute) { 
    this.socket = io.connect('localhost:3001');
    this.route.params.subscribe(param=>{
      console.log(param.name);
      this.socket.emit('join_room', param.name);
    });
  }


  ngOnInit() {
    const s = (myP) => {

      this.myP = myP;
      myP.preload = () => {
        console.log('preload');
      }

      myP.setup = () => {
        myP.createCanvas(1400, 900);
        myP.background(70,70,70);
      }

      myP.draw = () => {
        if(myP.mouseIsPressed){
          let event : drawEvent = { p1: { x :myP.mouseX, y:myP.mouseY }, p2:this.last_drew}
          this.socket.emit('draw', event);
        //  this.onDraw(event);
        }

        this.last_drew = { x : myP.mouseX, y : myP.mouseY};
      }
    }

    let player = new p5(s);
    this.socket.on('draw', (data) =>{
  //    console.log("heard");
      this.myP.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
      this.myP.strokeWeight(4);
  });
  }  //close on ngOnInit
}

interface drawEvent{
  p1 : point,
  p2 : point
}

interface point{
  x : number,
  y : number
}

