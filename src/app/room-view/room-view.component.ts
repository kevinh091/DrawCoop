import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  persons;

  constructor() { 
    this.persons = [];
  }

  ngOnInit() {
  }

}
