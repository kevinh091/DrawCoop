import { Component, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent{
  link: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
  	var op = ""+ Math.floor(Math.random()*10000);
  	this.link = "http://whiteboard.gq/" + op;
    let dialogRef = this.dialog.open(FrontPageDialogComponent, {
      width: '250px',
      position: { right: '0'},
      data: { link: this.link }
    });
    //window.location.href = '/'+op;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      window.location.href = '/'+op;
    });
  }
}

@Component({
  selector: 'front-page-dialog',
  templateUrl: 'front-page-dialog.component.html',
})
export class FrontPageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FrontPageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();

  }

}
