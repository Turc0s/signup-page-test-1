import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/user.model';
import { UserInfo } from "./../../shared/user-info.model";
import { UserService } from "../../shared/user.service";
import { ToastrService } from "ngx-toastr";

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

  userinfoList: UserInfo[];

  constructor(private _userService: UserService,
                private _toastrService: ToastrService) { }

  ngOnInit() {
    var listItem = this._userService.getData();
    listItem.snapshotChanges().subscribe(item => {
      this.userinfoList = [];
      item.forEach(element => {
        var storageData = element.payload.toJSON();
        storageData["$key"] = element.key;
        this.userinfoList.push(storageData as UserInfo);
      });
    });
  }

  onEdit(user: UserInfo) {
    // this._userService.selectedUser = user;
    this._userService.selectedUser = Object.assign({}, user);
  }

  onDelete(key: string) {
    if(confirm("Are you sure to delete this record ?") == true) {
      this._userService.deleteUserInfo(key);
      this._toastrService.warning("Deleted Successfully", "User Info")
    }
  }

}
