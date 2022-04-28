import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  login(login:Login): Observable<boolean>{
    return this.http.post('https://localhost:7270/api/Account/login', login)
      .pipe( map((response: any) => {

          if(response) {
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
      }))

    };

  logout(){
    localStorage.removeItem('token')
  }
}
