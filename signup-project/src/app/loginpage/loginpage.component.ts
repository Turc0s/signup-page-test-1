import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toSignUp() {
    this.router.navigate(["/signup"]);
  }

  toMainPage(){
    this.router.navigate(["/main"]);
  }

}
