import { Component, OnInit } from '@angular/core';
import { RegUserService } from '../shared/reg-user.service';
import { RegUser } from "../shared/reg-user.model";

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {

  regUserList: RegUser[];

  constructor(private _regUserService: RegUserService) { }

  ngOnInit() {
    var reglistItem = this._regUserService.getRegData();
    reglistItem.snapshotChanges().subscribe(item => {
      this.regUserList = [];
      item.forEach(element => {
        var regStorageData = element.payload.toJSON();
        regStorageData["$key"] = element.key;
        this.regUserList.push(regStorageData as RegUser);
      });
    });
  }

}

