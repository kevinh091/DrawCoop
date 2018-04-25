import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent  {
  eraser_clicked;
  clear_clicked;
  isDragging;
  toolbar;

  constructor() { 
    this.toolbar = false;
    this.clear_clicked = false;
    this.eraser_clicked = false;
    this.isDragging =false;
  }

 //toolbar's initial position is at main.component.ts function myP.setup

  onClickEraser(){
    this.eraser_clicked = true;
    document.getElementById('ToolIcon').innerText = 'Eraser';
  }
  onClickPen(){
    this.eraser_clicked = false;
    document.getElementById('ToolIcon').innerText = 'Pen';

  }
  onClickClear(){
    this.clear_clicked =true;
    document.getElementById('ToolIcon').innerText = 'Pen';
  }
  onClickIcon(){
    //this.toolbar = !this.toolbar;
  }
}
