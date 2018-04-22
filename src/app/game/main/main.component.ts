import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import * as io from 'socket.io-client';
import { SwitchColorService } from '../../services/switch-color.service';
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
  eraser_clicked : boolean;

<<<<<<< HEAD
  constructor(private route: ActivatedRoute) { 
=======

  constructor(private switchColor: SwitchColorService) {
>>>>>>> a099a420dcf1f8d63f6db01584a81ffd66324948
    this.socket = io.connect('localhost:3001');
    this.route.params.subscribe(param=>{
      console.log(param.name);
      this.socket.emit('join_room', param.name);
    });
  }

<<<<<<< HEAD
=======
  onDraw(data) {
      console.log("heard");
      //default pen values
      this.myP.stroke(data.p3.value1, data.p3.value2, data.p3.value3);
      this.myP.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
      this.myP.strokeWeight(4);

  }
>>>>>>> a099a420dcf1f8d63f6db01584a81ffd66324948

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
          let event : drawEvent = { 
            p1: { x :myP.mouseX, y:myP.mouseY }, 
            p2:this.last_drew,
            p3: { value1:0, value2:0, value3:0}
          }
          this.socket.emit('draw', event);
          this.onDraw(event);
        }
        if(this.eraser_clicked == true){
          let event : drawEvent = { 
            p1: { x :myP.mouseX, y:myP.mouseY }, 
            p2:this.last_drew,
            p3: { value1:70, value2:70, value3:70}
          }
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


  onClickEraser(){
    this.eraser_clicked = true;
  }
  onClickPen(){
    console.log('You clicked Pen');
    this.eraser_clicked = false;

  }
  onClickColor(){
    console.log('You clicked');
    this.myP.background(0, 0, 0);
  }
}

interface point{
  x : number,
  y : number
}

interface rgb{
  value1 : number,
  value2 : number,
  value3 : number
}

interface drawEvent{
  p1 : point,
  p2 : point,
  p3 : rgb
}

