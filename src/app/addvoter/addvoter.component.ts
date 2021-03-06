import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Voter } from '../Entities/voter';
import { VoterService } from '../Services/voter.service';

@Component({
  selector: 'app-addvoter',
  templateUrl: './addvoter.component.html',
  styleUrls: ['./addvoter.component.css']
})
export class AddvoterComponent implements OnInit {

  submitted = false;
   public form = this.fb.group({
    fullName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]{5,20}$')]],
    email: ['' , [Validators.required,Validators.pattern('^[A-Za-z0-9_.]{4,20}@[A-Za-z]{3,8}\.[A-Za-z]{2,10}$'),],],
    adharNo:['',[Validators.required,Validators.required,Validators.pattern('^[0-9]{12}$')]],
    password:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9 ]{7,8}$')]],
    employeeId:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]{5,20}$')]]

  })
  constructor(public fb: FormBuilder,private http:HttpClient,private voterService:VoterService) { 

  
  }
  vari =false;
  ngOnInit(): void {
  }

  addVoter(){

    const data=this.form.value;

    this.voterService.addVoter(data).subscribe((res)=>{
      console.log("added voter");
    })
  }

}
