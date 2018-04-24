import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './game/main/main.component';
import { NotFoundComponent } from './game/not-found/not-found.component';
import { SwitchColorService } from './services/switch-color.service';
import { UiComponent } from './ui/ui.component';
import { CustomDrawingComponent } from './game/main/custom-drawing/custom-drawing.component';
import { ToolsComponent } from './game/main/tools/tools.component';

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
    CustomDrawingComponent,
    ToolsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SwitchColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
