import { Injectable } from "@angular/core";
import { OnInit } from "@angular/core";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { RegUser } from "../shared/reg-user.model";

@Injectable()
export class RegUserService implements OnInit {

    regUserList: AngularFireList<any>;
    selectedRegUser: RegUser = new RegUser();

    constructor(private _firebaseRegDB: AngularFireDatabase) {}

    ngOnInit() {

    }

    getRegData() {
        this.regUserList = this._firebaseRegDB.list("reg-users");
        return this.regUserList;
    }

    insertRegUserInfo(regUser: RegUser) {
        this.regUserList.push({
          fname: regUser.fname,
          lname: regUser.lname,
          username: regUser.username,
          email: regUser.email
        });
      }
    
      updateRegUserInfo(regUser: RegUser) {
        this.regUserList.update(regUser.$key, {
            fname: regUser.fname,
            lname: regUser.lname,
            username: regUser.username,
            email: regUser.email
          });
      }
    
      deleteRegUserInfo($key: string) {
        this.regUserList.remove($key);
      }


}