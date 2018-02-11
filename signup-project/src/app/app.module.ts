import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainComponent } from './main/main.component';
import { HellopageComponent } from './main/hellopage/hellopage.component';
import { ShowinfoComponent } from './main/showinfo/showinfo.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ChangeinfoComponent } from './main/changeinfo/changeinfo.component';
import { Routes, RouterModule } from "@angular/router";
import { HelloPageComponent } from './hello-page/hello-page.component';

import { ToastrModule, ToastrService } from "ngx-toastr";

import { environment} from "../environments/environment";
import { RegUsersComponent } from './reg-users/reg-users.component';
import { RegUserService } from './shared/reg-user.service';

const appRoutes: Routes = [
  { path: "", component: HelloPageComponent },
  { path: "loginpage", component: LoginpageComponent },
  { path: "main", component: MainComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "registeredusers", component: RegUsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupPageComponent,
    MainComponent,
    HellopageComponent,
    ShowinfoComponent,
    LoginpageComponent,
    ChangeinfoComponent,
    HelloPageComponent,
    RegUsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ToastrService, RegUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
