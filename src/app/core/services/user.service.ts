import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchases } from 'src/app/shared/models/Purchases';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserPurchasedMovies() : Observable<Purchases>{
    //https://localhost:7270/api/User/purchases

    return this.http.get<Purchases>('https://localhost:7270/api/User/purchases');
  }

  getUserFavoritedMovies(){

  }

  getUserReviewedMovies(){

  }

  purchaseMovie(){
    
  }
}
