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
