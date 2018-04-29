import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './game/main/main.component';
import { NotFoundComponent } from './game/not-found/not-found.component';
import { SwitchColorService } from './services/switch-color.service';
import { UiComponent } from './loginForm/ui.component';
import { ToolsComponent } from './game/main/tools/tools.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RoomViewComponent } from './room-view/room-view.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: ':name', component: MainComponent, data:{name}},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    UiComponent,
    ToolsComponent,
    FrontPageComponent,
    RoomViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [SwitchColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
