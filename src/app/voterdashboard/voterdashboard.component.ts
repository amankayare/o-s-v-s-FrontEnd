import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Election } from '../Entities/election';
import { CandidateElectionEarnedServiceService } from '../Services/candidate-election-earned-service.service';
import { ElectionService } from '../Services/election.service';


@Component({
  selector: 'app-voterdashboard',
  templateUrl: './voterdashboard.component.html',
  styleUrls: ['./voterdashboard.component.css']
})
export class VoterdashboardComponent implements OnInit {

  public isValidated = false;
  form: FormGroup;
  voterId: any;
  electionId: any;
  goToPollStatus: Promise<Object> | any;
  electionName: any;
  isVoted: any;


  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder,private electionService:ElectionService,private candidateVoteEarned:CandidateElectionEarnedServiceService) {

    // this.employeeId = 10;
    this.form = this.fb.group({
      securedFile: [null],

    })
  }

  election: Election | any;

  async ngOnInit(): Promise<void> {

 

    if (!sessionStorage.getItem('voterId') || !sessionStorage.getItem('electionId')) {
      this.router.navigate(['/']);
    } else {
      this.voterId = sessionStorage.getItem('voterId');
      this.electionId = sessionStorage.getItem('electionId');
    }

    console.log(" vId "+this.voterId);
    console.log(" eId "+this.electionId);

   this.election =  await this.electionService.getElection(this.electionId).toPromise();
   this.electionName=this.election.electionName;
    console.log(this.election);  
    //  let num:number=0;
    //  let i:number;

    //  for(i=num;i<this.election.candidateList?.length;i++){
             
    //  }

  }


  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];

    this.form.patchValue({
      securedFile: file
    });
    this.form.get("securedFile")?.updateValueAndValidity();
  }

  async validateVoter() {
    var formData: any = new FormData();

    console.log(this.voterId);
    console.log(this.electionId);
    formData.append("decrytFile", this.form.get("securedFile")?.value);
    formData.append("electionId", this.electionId);
    formData.append("voterId", this.voterId);

    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");


    this.goToPollStatus= await this.http.post('http://localhost:8080/E-Ballot/api/goToPoll', formData, { headers: headers }).toPromise();

    if (this.goToPollStatus.status == "SUCCESS") {
      console.log("successfull open the poll");
      // mode:number = res.adharNo;
      //sessionStorage.setItem('adhar',res.adharNo);
      console.log(this.goToPollStatus);
      this.isValidated=true;
    } else {
      console.log("failed to open the poll");
      console.log(this.goToPollStatus);
      this.isValidated=false;
    }

  }


  async checkIsVoted(id:any){
      

    var formData: any = new FormData();

    console.log(this.voterId);
    console.log(this.electionId);
    formData.append("candidateId", id);
    formData.append("electionId",this.electionId);
    formData.append("voterId", this.voterId );

    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

   

    this.isVoted=await this.candidateVoteEarned.modifyCandidateVoteEarnedAndVoterVoteStatus(formData).toPromise();

    console.log(this.isVoted);

    if(this.isVoted.status=="SUCCESS"){
    //  this.isValidated=false;
    }

  }

}
