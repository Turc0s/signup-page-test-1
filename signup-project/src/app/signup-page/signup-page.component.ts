import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegUserService } from '../shared/reg-user.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router,
              private _regUserService: RegUserService) { }

  ngOnInit() {
    this._regUserService.getRegData();
  }

  backToLogin() {
    this.router.navigate(["/loginpage"]);
  }

  onRegUserSubmit(regForm: NgForm) {
    if(regForm.value.$key == null)
      this._regUserService.insertRegUserInfo(regForm.value);

    regForm.reset();
  }

  onResetRegForm(regForm: NgForm){
    if(regForm != null)
      regForm.reset();
    this._regUserService.selectedRegUser = {
      $key: null,
      fname: "",
      lname: "",
      username: "",
      email: ""
    }
  }
  
}
