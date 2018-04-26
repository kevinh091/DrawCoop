import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  persons;
  myname;

  constructor() { 
    this.persons = [];
    this.myname = {name:'Guest', changed:false};

  }

  ngOnInit() {
  }

  change_name(){
    this.myname.name = document.getElementById("nameholder").value;
    this.myname.changed = true;
  }
}
