import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log('Clicked on submit button')
    console.log(this.loginModel)
  }
}
