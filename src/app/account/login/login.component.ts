import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { Login } from 'src/app/shared/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel : Login = {
    email:'',
    password:''
  }
  invalidLogin:boolean= false;
  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log('Clicked on submit button')
    console.log(this.loginModel)
    this.accountService.login(this.loginModel).subscribe(
      data => this.router.navigateByUrl('/'),
      (err:HttpErrorResponse) => {
        this.invalidLogin=true;
      }


    );
  }
}
