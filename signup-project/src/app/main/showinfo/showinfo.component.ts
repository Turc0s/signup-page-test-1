import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';

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

  constructor() { }

  ngOnInit() {
  }

}
