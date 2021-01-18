import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CreateballotComponent } from './createballot/createballot.component';
import { AddvoterComponent } from './addvoter/addvoter.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListofvoterComponent } from './listofvoter/listofvoter.component';
import { ListofcandidateComponent } from './listofcandidate/listofcandidate.component';
import { VoterdashboardComponent } from './voterdashboard/voterdashboard.component';
import { ResultComponent } from './result/result.component';
import { VotecandidateComponent } from './votecandidate/votecandidate.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CreateballotComponent,
    ContentComponent,
    AddvoterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ListofvoterComponent,
    ListofcandidateComponent,
    VoterdashboardComponent,
    ResultComponent,
    VotecandidateComponent,
    ViewComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
