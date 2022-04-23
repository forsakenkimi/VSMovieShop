import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/MovieCard';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopGorssingMovies() : Observable<MovieCard[]> {
  //  https://localhost:7270/api/Movies/top-grossing

   return this.http.get<MovieCard[]>('https://localhost:7270/api/Movies/top-grossing')
  }

  getMovieDetails(id:number){

  }

  getMoviesByGenre(genreId:number){

  }

}
