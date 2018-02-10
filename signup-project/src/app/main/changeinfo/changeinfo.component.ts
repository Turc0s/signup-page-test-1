import { Component, OnInit } from '@angular/core';

import { UserService } from "../../shared/user.service";
import { NgForm } from '@angular/forms';
import { UserInfo } from '../../shared/user-info.model';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent implements OnInit {

  constructor(private _userService: UserService,
              private _toastrService: ToastrService) { }

  ngOnInit() {
    this._userService.getData();
    this.resetForm();
  }

  onSubmit(userinfoForm: NgForm) {
    this._userService.insertUserInfo(userinfoForm.value);
    this.resetForm();
    this._toastrService.success("Submitted Successfully", "User Info");

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
