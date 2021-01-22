import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Voter } from '../Entities/voter';
import { VoterService } from '../Services/voter.service';

@Component({
  selector: 'app-listofvoter',
  templateUrl: './listofvoter.component.html',
  styleUrls: ['./listofvoter.component.css']
})
export class ListofvoterComponent implements OnInit {

  listOfVoter: Voter[] | undefined;

  voterForm!: FormGroup;

  constructor(private http:HttpClient,private voterService:VoterService,private fb:FormBuilder) {

    this.voterForm = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:[''],
      password:[''],
      employeeId:['']

    })

   }

 
  allVoter(){
    this.voterService.getAllVoter().subscribe((res)=>{
      this.listOfVoter=res;
      console.log("all voter");
    })
  }
  ngOnInit(): void {
    this.allVoter();
  }
   
}
