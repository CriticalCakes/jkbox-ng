import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaylistService } from './playlist.service';
import { PlaylistComponent } from './playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
