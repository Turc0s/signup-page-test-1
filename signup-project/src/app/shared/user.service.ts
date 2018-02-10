import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { UserInfo } from "./user-info.model";

@Injectable()
export class UserService {

  userinfoList: AngularFireList<any>;
  selectedUser: UserInfo = new UserInfo();

  constructor(private _firebaseDB: AngularFireDatabase) { }

  getData() {
    this.userinfoList = this._firebaseDB.list("userinfo");
    return this.userinfoList;
  }

  insertUserInfo(userinfo: UserInfo) {
    this.userinfoList.push({
      name: userinfo.name,
      position: userinfo.position,
      office: userinfo.office,
      salary: userinfo.salary
    });
  }

  updateUserInfo(userinfo: UserInfo) {
    this.userinfoList.update(userinfo.$key, {
      name: userinfo.name,
      position: userinfo.position,
      office: userinfo.office,
      salary: userinfo.salary
    });
  }

  deleteUserInfo($key: string) {
    this.userinfoList.remove($key);
  }
}
