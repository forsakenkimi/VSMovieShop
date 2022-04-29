import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Purchases } from 'src/app/shared/models/Purchases';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases!: Purchases;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //https://localhost:7270/api/User/purchases
    this.userService.getUserPurchasedMovies().subscribe(resp=>{
      console.log(resp);
      this.purchases = resp;
    })
  }

}
