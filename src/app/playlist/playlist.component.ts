import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

    constructor(public plService : PlaylistService) { }

    ngOnInit() {
        this.plService.getPlaylist(6);
    }

}
