import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './game/main/main.component';
import { SwitchColorService } from './services/switch-color.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SwitchColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
