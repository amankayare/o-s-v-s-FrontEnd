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
import { CandidateorganisationComponent } from './candidateorganisation/candidateorganisation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagevoterComponent } from './managevoter/managevoter.component';
import { ProfileComponent } from './profile/profile.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { ManagecandidateComponent } from './managecandidate/managecandidate.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD


=======
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FileformtestpravinComponent } from './fileformtestpravin/fileformtestpravin.component';
>>>>>>> 981df9f9b93505105108d0f0e2d4319d3c371f09
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
    ViewComponent,
    CandidateorganisationComponent,
    AboutusComponent,
    ManagevoterComponent,
    ProfileComponent,
    AddcandidateComponent,
    ManagecandidateComponent,
<<<<<<< HEAD
 
=======
    FileformtestpravinComponent,
>>>>>>> 981df9f9b93505105108d0f0e2d4319d3c371f09
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> 981df9f9b93505105108d0f0e2d4319d3c371f09
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
