import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Candidate } from '../Entities/candidate';
import { CandidateService } from '../Services/candidate.service';
import { ElectionService } from '../Services/election.service';


@Component({
  selector: 'app-listofcandidate',
  templateUrl: './listofcandidate.component.html',
  styleUrls: ['./listofcandidate.component.css']
})
export class ListofcandidateComponent implements OnInit {

  form: FormGroup;

  
  listOfCandidate : Candidate[] | undefined;
  
  constructor(private http:HttpClient,private candidateService:CandidateService,private fb:FormBuilder) { 


    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:[''],
      symbol:[null],
      employeeId:['']

    })

  }


 
  allCandidate(){
    this.candidateService.getAllCandidate().subscribe((res)=>{
      this.listOfCandidate=res;
    })
  }

  ngOnInit(): void {
    this.allCandidate();
  }

}
