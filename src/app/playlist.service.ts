import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playlist, Song } from './playlist';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PlaylistService {
    private baseUrl = 'http://localhost:8080/jkbox/api/playlist';
    public playlist: Playlist;

    constructor(private http: HttpClient) { }

    getPlaylist(id: number): Observable<Playlist> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Playlist>(url);
    }

    createPlaylist(name: string, author: string) {
        const url = `${this.baseUrl}/`;
        return  this.http
                    .post<Playlist>(
                        url,
                        {name: name, author: author},
                        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
                    );
    }

    addSong(id: number, song_url: string) {
        const url = `${this.baseUrl}/${id}/song/`;
        const song = { url: song_url };
        console.log(song);
        return  this.http
                    .post<Song> (
                        url,
                        song,
                        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
                    );
    }

    deleteSong(playlist_id: number, song_id) {
        const url = `${this.baseUrl}/${playlist_id}/song/${song_id}/delete`;
        return  this.http
                    .post(
                        url,
                        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
                    );
    }

    // updatePlaylist() {
    //     this.http.put<Playlist>(
    //         this.baseUrl,
    //         JSON.stringify(this.playlist),
    //         {headers: new HttpHeaders().set('Content-Type', 'application/json')}
    //     ).subscribe(
    //         data => this.playlist = data;
    //     );
    // }
}
