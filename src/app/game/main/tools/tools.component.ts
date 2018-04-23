import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  eraser_clicked;
  clear_clicked;
  toolbar;

  constructor() { 
    this.toolbar = true;
    this.clear_clicked = false;
    this.eraser_clicked = false;
  }

  ngOnInit() {
  }

  onClickEraser(){
    this.eraser_clicked = true;
    this.toolbar = false;
  }
  onClickPen(){
    this.eraser_clicked = false;
    this.toolbar = false;

  }
  onClickClear(){
    this.clear_clicked =true;
  }
}
