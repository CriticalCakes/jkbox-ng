export class Song {
    id: number;
    title: string;
    url: string;
    playing: number;
}

export class Playlist {
    id: number;
    name: string;
    author: string;
    songs: Array<Song>;
}
