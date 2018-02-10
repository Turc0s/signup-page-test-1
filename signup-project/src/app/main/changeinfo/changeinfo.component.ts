import { Component, OnInit } from '@angular/core';

import { UserService } from "../../shared/user.service";

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

}
