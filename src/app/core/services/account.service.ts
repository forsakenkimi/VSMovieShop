import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject = new BehaviorSubject<any>({}as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  private jwtHelper = new JwtHelperService();
  constructor(private http:HttpClient) { }
  login(login:Login): Observable<boolean>{
    return this.http.post('https://localhost:7270/api/Account/login', login)
      .pipe( map((response: any) => {

          if(response) {
            localStorage.setItem('token', response.token);
            this.populateUserInfoFromJwtToken();
            return true;
          }
          return false;
      }))

    };

  logout(){
    localStorage.removeItem('token')
    this.currentUserSubject.next({}as User)
    this.isLoggedInSubject.next(false);
  }
  populateUserInfoFromJwtToken(){
    var tokenValue = localStorage.getItem('token');

    if (tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)) {
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
   
      this.currentUserSubject.next(decodedToken);
      this.isLoggedInSubject.next(true);
    }
  }
}
