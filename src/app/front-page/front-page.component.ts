import { Component, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JSONP_ERR_WRONG_METHOD } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent{
  link: string;
  DialogIsOpen:boolean;

  constructor(private dialog: MatDialog) {
    this.DialogIsOpen=false;
  }

  invite(): void {
    if(this.DialogIsOpen){return}
  	//let op = ""+ Math.floor(Math.random()*10000);
    this.link = window.location.href;
    let dialogRef = this.dialog.open(
      FrontPageDialogComponent,
      {data: { link: this.link , isInvite:true}},
  );
    this.DialogIsOpen = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.DialogIsOpen=false;
    });
  }
  
  newRoom():void{
    if(this.DialogIsOpen){return}
  	//let op = ""+ Math.floor(Math.random()*10000);
    let dialogRef = this.dialog.open(
      FrontPageDialogComponent, 
      {data: { link: this.link , isInvite:false},}
    );
    this.DialogIsOpen = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.DialogIsOpen=false;
    });
  }

}

@Component({
  selector: 'front-page-dialog',
  templateUrl: 'front-page-dialog.component.html',
  styleUrls: ['./front-page-dialog.component.css']
})
export class FrontPageDialogComponent {

  isInvite:boolean;
  constructor(
    public dialogRef: MatDialogRef<FrontPageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
      this.isInvite = data.isInvite;
    }

  onNoClick(): void {
    let selBox = document.createElement('textarea'); //to clipboard
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.data.link;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.dialogRef.close();

  }

  newRoom(roomName: string): void{
    window.location.href = '/'+roomName;
    this.dialogRef.close();
  }
  
  cancel():void{
    this.dialogRef.close();
  }

}