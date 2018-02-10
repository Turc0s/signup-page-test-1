import { Component, OnInit } from '@angular/core';

import { UserService } from "../../shared/user.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(userinfoForm: NgForm) {

  }

  resetForm(userinfoForm?: NgForm) {
    if(userinfoForm != null)
      userinfoForm.reset();
    this._userService.selectedUser = {
      $key: null,
      name: "",
      position: "",
      office: "",
      salary: 0
    }
  }

}
