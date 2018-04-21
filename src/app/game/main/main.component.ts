import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
declare var p5: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  socket: SocketIOClient.Socket;
  canvas: any;
  last_drew : point;

  constructor() { 
    this.socket = io.connect('localhost:3001');
  }

  onDraw(data) {
      console.log("heard");
      this.document.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
      this.document.strokeWeight(4);

  }

  ngOnInit() {
    const s = (document) => {

      this.document = document;
      document.preload = () => {
        console.log('preload');
      }

      document.setup = () => {
        document.createCanvas(1400, 900);
        document.background(70,70,70);
      }

      document.draw = () => {
        if(document.mouseIsPressed){
          let event : drawEvent = { p1: { x :document.mouseX, y:document.mouseY }, p2:this.last_drew}
          this.socket.emit('draw', event);
          this.onDraw(event);
        }

        this.last_drew= { x : document.mouseX, y : document.mouseY};
      }
    }

    let player = new p5(s);
    this.socket.on('draw', this.onDraw);
  }  //close on ngOnInit
  
  interface drawEvent(){
    p1 : point;
    p2 : point;
  }

  interface point(){
    x : number;
    y : number;
  }
}

