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
  points = [];
  last_drew ={isLine: false,x:0,y:0};
  //last_emited = 0;

  constructor() { 
    this.socket = io.connect('localhost:3001');
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
        p.background(50,50,50);
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
             p.ellipse(p.mouseX, p.mouseY, 5,5);
             this.last_drew.isLine = true;
           }else{
            p.line(p.mouseX, p.mouseY, this.last_drew.x, this.last_drew.y);
            p.strokeWeight(6);
           }
          this.last_drew.x=p.mouseX;
          this.last_drew.y = p.mouseY;
          //p.ellipse(p.mouseX, p.mouseY, 20, 20);
          /*if(this.last_added.x !=p.mouseX && this.last_added.y != p.mouseY) {
            this.points.push({x:p.mouseX, y:p.mouseY});
            this.last_added ={x:p.mouseX, y:p.mouseY};
          }*/
          /*let millisecond = p.millis();
          if(millisecond-this.last_emited>1000){
            this.socket.emit('draw', 
              this.points
            );
            this.last_emited = millisecond;
            this.points = [];
          }*/
        }
        else{
          this.last_drew.isLine = false;
        }
        //this.last_drew = {x:-10,y:-10};
      }
    }
    let player = new p5(s);


    this.socket.on('draw',(data) => {
      for(let i=0;i<data.length;i++){
        this.myP.ellipse(data[i].x, data[i].y, 8, 8);
      }
    }

    );
  }


}

