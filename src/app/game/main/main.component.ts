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
  myP: any;
  last_drew ={ isLine:false , x:0 , y:0 };
  //last_emited = 0;

  constructor() { 
    this.socket = io.connect('jiqing666.com:3001');
  }

  ngOnInit() {
    const s = (p) => {

      let canvas;
      this.myP = p;
      p.preload = () => {
        console.log('preload');
      }

      p.setup = () => {
        canvas = p.createCanvas(1400, 900);
        p.background(70,70,70);
      }

      
      
      p.draw = () => {
        if(p.mouseIsPressed){
          //var c = p.color(50, 50, 50); // Define color 'c'
          //p.fill(c); // Use color variable 'c' as fill color
          //p.ellipse(p.mouseX, p.mouseY, 1, 1);
          //if(this.last_drew.x!=-10 && this.last_drew.y !=-10){
            //var c = p.color(180, 180, 150); // Define color 'c'
           // p.fill(c); 
           if(!this.last_drew.isLine){
            this.socket.emit('draw', {
              x1:p.mouseX, y1:p.mouseY, x2:p.mouseX, y2:p.mouseY
              }
            );
            this.last_drew.isLine = true;
           }else{
            if(p.mouseX == this.last_drew.x && p.mouseY ==this.last_drew.y){return;}
            this.socket.emit('draw', {
              x1:p.mouseX, y1:p.mouseY, x2:this.last_drew.x ,y2:this.last_drew.y
              }
            );
           }
          this.last_drew.x=p.mouseX;
          this.last_drew.y = p.mouseY;
        }
        else{
          this.last_drew.isLine = false;
        }
        //this.last_drew = {x:-10,y:-10};
      }
    }
    let player = new p5(s);


    this.socket.on('draw',(data) => {
      this.myP.line(data.x1, data.y1, data.x2, data.y2);
      this.myP.strokeWeight(4);
    }

    );
  }  //close on ngOnInit
}

