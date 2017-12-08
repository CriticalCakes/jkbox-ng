import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaylistService } from './playlist.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    YoutubePlayerModule
  ],
  providers: [
    PlaylistService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
