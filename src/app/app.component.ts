import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  created = false;
  name: string;
  author: string;
  id = 0;

  constructor(public plService: PlaylistService) {}

  createPlaylist() {
    this.plService
        .createPlaylist(this.name, this.author)
        .subscribe(
          (data) => {
            console.log(data);
            this.id = data.id;
            this.created = true;
          }
        )
  }
}
