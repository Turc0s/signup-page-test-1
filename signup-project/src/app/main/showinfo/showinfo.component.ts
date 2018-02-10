import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';

import { UserService } from "../../shared/user.service";

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {

  users: User[] = [
    new User("Tapio", "Mattila", "Turc", "test@gmail.com"),
    new User("Tapio", "Mattila", "Turc", "test@gmail.com"),
    new User("Tapio", "Mattila", "Turc", "test@gmail.com"),
    new User("Tapio", "Mattila", "Turc", "test@gmail.com")
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

}
