import { Component, OnInit } from '@angular/core';

import { UserService } from "../shared/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [UserService]
})
export class MainComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

}
