import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';
import { YoutubePlayerModule } from 'ngx-youtube-player';

@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    playlist: Playlist;
    url: string;
    playing: number;
    @Input('plId') plId: number;

    player: YT.Player;
    video_id = 'qDuKsiwS5xw';

    changing = false;

    constructor(public plService: PlaylistService) { }

    savePlayer (player) {
        this.player = player;
        console.log('player instance', player);
    }

    onStateChange(event){
        console.log('player state', event.data);
    }

    loadPlaylist() {
        this.plService
            .getPlaylist(this.plId)
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
        this.url = '';
    }

    playSong(id: number) {
        console.log('play');
        console.log(id);
        const song = this.playlist.songs.find(i => i.id === id );
        const yt_id = song.url.split('=', 2)[1];
        this.video_id = yt_id;
        this.player.cueVideoById(yt_id);
        this.player.nextVideo();
        this.player.playVideo();
        this.savePlayer(this.player);
    }

    deleteSong(song_id: number, index: number) {
        console.log('delete');
        console.log(song_id);
        this.plService
            .deleteSong(this.playlist.id, song_id)
            .subscribe(
                (data) => {
                    this.playlist.songs.splice(index, 1);
                }
            );
    }

    ngOnInit() {
        console.log(this.plId);
        this.loadPlaylist();
    }
}
