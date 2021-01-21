import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CreateballotComponent } from './createballot/createballot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagevoterComponent } from './managevoter/managevoter.component';
import { ProfileComponent } from './profile/profile.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { ManagecandidateComponent } from './managecandidate/managecandidate.component';
import { FileformtestpravinComponent } from './fileformtestpravin/fileformtestpravin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'E-Bellot/api/admin', component: ContentComponent },
  { path: 'E-Bellot/api/navbar', component: NavbarComponent },
  { path: 'E-Bellot/api/sidebar', component: SidebarComponent },
  { path: 'E-Bellot/api/createballot', component: CreateballotComponent },
  { path: 'E-Bellot/api/addvoter', component: AddvoterComponent },
  { path: 'E-Bellot/api/footer', component: FooterComponent },
  { path: 'E-Bellot/api/header', component: HeaderComponent },
  { path: 'E-Bellot/api/login', component: LoginComponent },
  { path: 'E-Bellot/api/candidatelist', component: ListofcandidateComponent },
  { path: 'E-Bellot/api/voterlist', component: ListofvoterComponent },
  { path: 'E-Bellot/api/voterdashboard', component: VoterdashboardComponent },
  { path: 'E-Bellot/api/result', component: ResultComponent },
  { path: 'E-Bellot/api/votecandidate', component: VotecandidateComponent },
  { path: 'E-Bellot/api/aboutus', component: AboutusComponent },
  { path: 'E-Bellot/api/managevoter', component: ManagevoterComponent },
  { path: 'E-Bellot/api/profile', component: ProfileComponent },
  { path: 'E-Bellot/api/addcandidates', component: AddcandidateComponent },
  { path: 'E-Bellot/api/managecandidates', component: ManagecandidateComponent },
  { path: 'E-Bellot/api/test2', component: FileformtestpravinComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
