import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Voter } from '../Entities/voter';
import { VoterService } from '../Services/voter.service';

@Component({
  selector: 'app-addvoter',
  templateUrl: './addvoter.component.html',
  styleUrls: ['./addvoter.component.css']
})
export class AddvoterComponent implements OnInit {

   form: FormGroup;

  constructor(public fb: FormBuilder,private http:HttpClient,private voterService:VoterService) { 

    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:[''],
      password:[''],
      employeeId:['']

    })
  }

  ngOnInit(): void {
  }

  addVoter(){

    const data=this.form.value;

    this.voterService.addVoter(data).subscribe((res)=>{
      console.log("added voter");
    })
  }

}
