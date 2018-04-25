import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {CustomDrawing} from './custom-drawing';
import {ToolsComponent} from './tools/tools.component';

import * as io from 'socket.io-client';
import { SwitchColorService } from '../../services/switch-color.service';
declare var p5: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements AfterViewInit, OnInit {
  @ViewChild(ToolsComponent) toolComponent;
  custom: CustomDrawing;
  socket: SocketIOClient.Socket;
  tools: ToolsComponent;
  myP: any;
  last_drew : point;

 constructor(private route: ActivatedRoute, private switchColor: SwitchColorService) {
    this.socket = io.connect('jiqing666.com:3001');
    this.route.params.subscribe(param=>{
      console.log(param.name);
      this.socket.emit('join_room', param.name);
    });
    this.custom = new CustomDrawing();
    this.tools = new ToolsComponent();
  }

  ngAfterViewInit(){
    this.tools = this.toolComponent;
  }
 onDraw(data) {
      this.myP.stroke(data.color[0], data.color[1], data.color[2]);
      this.myP.strokeWeight(data.width);
      this.myP.line(data.p1.x, data.p1.y, data.p2.x, data.p2.y);
  }
  ngOnInit() {
    const s = (myP) => {
      let cnvX;
      let cnvY;
      this.myP = myP;
      myP.preload = () => {
      }
      
      
      myP.setup = () => {
        let cnv = myP.createCanvas(myP.windowWidth, myP.windowHeight);
        cnvX = (myP.windowWidth-myP.width)/2;
        cnvY = (myP.windowHeight-myP.height)/1.1;
        cnv.position(0,0);
        cnv.style('vertical-align', 'top');
        myP.background(this.custom.canvas.backgroundColor);
        myP.cursor(myP.CROSS);
        document.getElementById('toolContainer').style.left = String(0+'px');
        document.getElementById('toolContainer').style.top = String(myP.height/4+'px');
      }
      
      myP.draw = () => {
        if(this.tools.isDragging){
          document.getElementById('toolContainer').style.left =
          String(Math.max(myP.mouseX-25,0)+'px');
          document.getElementById('toolContainer').style.top =
          String(myP.mouseY-25+'px');
          return;
        }

        if(myP.mouseIsPressed && !this.tools.eraser_clicked ){
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
        if(myP.mouseIsPressed &&this.tools.eraser_clicked ){
          let event : drawEvent = { 
            p1: { x :myP.mouseX, y:myP.mouseY }, 
            p2:this.last_drew,
            color: this.custom.canvas.backgroundColor,
            width: 120
          }
          this.socket.emit('draw', event);
          this.onDraw(event);
        }

        if(this.tools.clear_clicked === true){
          this.socket.emit('clear',' ');
          this.myP.clear();
          this.myP.createCanvas(myP.windowWidth, myP.windowHeight);
          this.myP.background(this.custom.canvas.backgroundColor);
          this.tools.eraser_clicked = false;
          this.tools.toolbar = false;
          this.tools.clear_clicked =false;
        }

        this.last_drew = { x : myP.mouseX, y : myP.mouseY};
      }
    }

    let player = new p5(s);
    this.socket.on('draw', (data) =>{
      this.onDraw(data);
    });

    this.socket.on('clear', (data) =>{
          this.myP.clear();
          this.myP.createCanvas(this.myP.windowWidth, this.myP.windowHeight);
          this.myP.background(this.custom.canvas.backgroundColor);
    });
  }  //close on ngOnInit

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