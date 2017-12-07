import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';

@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    playlist: Playlist;
    url: string;

    constructor(public plService: PlaylistService) {
        this.loadPlaylist();
    }

    loadPlaylist() {
        this.plService
            .getPlaylist(6)
            .subscribe(
                (data) => {
                    console.log(data);
                    this.playlist = data;
                }
            );
    }

    addSong(url) {
        this.plService
            .addSong(this.playlist.id, url)
            .subscribe(
                (data) => {
                    this.playlist.songs.push(data);
                }
            );
    }

    playSong(id: number) {
        console.log('play');
        console.log(id);
    }

    deleteSong(id: number) {
        console.log('delete');
        console.log(id);
    }

    ngOnInit() {}

}
