import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainComponent } from './main/main.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ChangeinfoComponent } from './main/changeinfo/changeinfo.component';
import { HellopageComponent } from './main/hellopage/hellopage.component';
import { ShowinfoComponent } from './main/showinfo/showinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloPageComponent,
    LoginpageComponent,
    MainComponent,
    SignupPageComponent,
    ChangeinfoComponent,
    HellopageComponent,
    ShowinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
