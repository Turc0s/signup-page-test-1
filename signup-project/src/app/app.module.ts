import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const appRoutes: Routes = [
  { path: "", component: HelloPageComponent },
  { path: "loginpage", component: LoginpageComponent },
  { path: "main", component: MainComponent },
  { path: "signup", component: SignupPageComponent }
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
