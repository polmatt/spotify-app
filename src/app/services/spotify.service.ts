import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
   }

  getQuery(query: string){
  const url = `https://api.spotify.com/v1/${ query }`;

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQDjhic4kk5OOdeFlc6XVUOqH9k3JkZiZg4gythuu5UfBrs4Bk2S86UKPGHG1LoYRiI1XMCgkhAEW1GgykTzJGIoT2od6GMPOpuePx53wIC41w6-P3Y'
  });

  return this.http.get(url, { headers });
}

  getNewReleases() {
 return this.getQuery('browse/new-releases?limit=20')
            .pipe(map((data:any) => data['albums'].items));


}

  getArtistas(termino:string){

  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                  .pipe(map((data:any) => data['artists'].items
  ));

}

getArtista(id:string){

  return this.getQuery(`artists/${id}`)
   /*                .pipe(map((data:any) => data['artists'].items
  )); */

}

getTopTracks(id:string){

  return this.getQuery(`artists/${id}/top-tracks?market=us`)
             .pipe(map((data:any) => data['tracks'] ));

}

}
