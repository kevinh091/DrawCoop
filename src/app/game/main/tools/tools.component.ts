import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent  {
  eraser_clicked;
  clear_clicked;
  toolbar;

  constructor() { 
    this.toolbar = true;
    this.clear_clicked = false;
    this.eraser_clicked = false;
  }



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
  }
  onClickIcon(){
    
  }
}
