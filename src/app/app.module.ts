import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaylistService } from './playlist.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PlaylistService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
