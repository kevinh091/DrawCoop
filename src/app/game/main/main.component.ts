import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {CustomDrawingComponent} from './custom-drawing/custom-drawing.component';

import * as io from 'socket.io-client';
import { SwitchColorService } from '../../services/switch-color.service';
declare var p5: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  custom: CustomDrawingComponent;
  socket: SocketIOClient.Socket;
  myP: any;
  last_drew : point;
  eraser_clicked : boolean;
  clear_clicked : boolean;
  toolbar = false;

 constructor(private route: ActivatedRoute, private switchColor: SwitchColorService) {
    this.socket = io.connect('localhost:3001');
    this.route.params.subscribe(param=>{
      console.log(param.name);
      this.socket.emit('join_room', param.name);
    });
    this.custom = new CustomDrawingComponent();
  }
 onDraw(data) {
      console.log("heard");
      //default pen values
      this.myP.strokeWeight(data.width);
      this.myP.stroke(data.color[0], data.color[1], data.color[2]);
      this.myP.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
  }
  ngOnInit() {
    const s = (myP) => {

      this.myP = myP;
      myP.preload = () => {
        console.log('preload');
      }
      
      /*myP.keyPressed = ()  => {
        if (myP.keyCode === myP.SHIFT) {
          this.toolbar = true;
        } 
      }*/
      
      myP.setup = () => {
        myP.createCanvas(this.custom.canvas.width, this.custom.canvas.height);
        myP.background(this.custom.canvas.backgroundColor);
      }
      
      myP.draw = () => {
        //Default Pen
        myP.fill(myP.color(300,150,150));
        myP.ellipse(10,10,80);
        if(myP.mouseX<45 && myP.mouseY<45){
          this.toolbar = true;
        }

        if(myP.mouseIsPressed && this.eraser_clicked != true){
          let event : drawEvent = { 
            p1: { x :myP.mouseX, y:myP.mouseY }, 
            p2:this.last_drew,
            color: [0,0,0],
            width: this.custom.pen.width
          }
          this.socket.emit('draw', event);
          this.onDraw(event);
        }

        //Eraser is clicked
        if(this.eraser_clicked == true && myP.mouseIsPressed ){
          let event : drawEvent = { 
            p1: { x :myP.mouseX, y:myP.mouseY }, 
            p2:this.last_drew,
            color: this.custom.canvas.backgroundColor,
            width: 120
          }
          this.socket.emit('draw', event);
          this.onDraw(event);
        }

        if(this.clear_clicked == true){
          
        }

        this.last_drew = { x : myP.mouseX, y : myP.mouseY};
      }
    }

    let player = new p5(s);
    this.socket.on('draw', (data) =>{
  //    console.log("heard");
      this.myP.stroke(data.color[0], data.color[1], data.color[2]);
      this.myP.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
      this.myP.strokeWeight(data.width);
    });

    this.socket.on('clear', (data) =>{
      //    console.log("heard");
          this.myP.clear();
          this.myP.createCanvas(this.custom.canvas.width, this.custom.canvas.height);
          this.myP.background(this.custom.canvas.backgroundColor);
        });
  }  //close on ngOnInit


  onClickEraser(){
    this.eraser_clicked = true;
    this.toolbar = false;
  }
  onClickPen(){
    console.log('You clicked Pen');
    this.eraser_clicked = false;
    this.toolbar = false;

  }
  onClickClear(){
    this.socket.emit('clear','');
    this.myP.clear();
    this.myP.createCanvas(this.custom.canvas.width, this.custom.canvas.height);
    this.myP.background(this.custom.canvas.backgroundColor);
    this.toolbar = false;
  }
}

interface point{
  x : number,
  y : number
}

interface drawEvent{
  p1 : point,
  p2 : point,
  color :Array<number>,
  width : number
}