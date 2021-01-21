import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Voter } from '../Entities/voter';
import { VoterService } from '../Services/voter.service';

@Component({
  selector: 'app-managevoter',
  templateUrl: './managevoter.component.html',
  styleUrls: ['./managevoter.component.css']
})
export class ManagevoterComponent implements OnInit {

  listOfVoter: Voter[] | undefined;

 voter: Voter= new Voter();

  constructor(private http:HttpClient,private voterService:VoterService) { }


  
  allVoter(){
    this.voterService.getAllVoter().subscribe((res)=>{
      this.listOfVoter=res;
      console.log("all voter");
    })
  }

  ngOnInit(): void {
    this.allVoter();
  }

 deleteVoter(id :  number){
   this.voterService.removeVoter(id).subscribe((res)=>{
     console.log(res);
     this.allVoter();
   })
 }

 updateVoter(id : number){
   
   this.voterService.getVoter(id).subscribe((res)=>{
    console.log("get voter");
       this.voter=res;
   })
   this.voterService.modifyVoter(this.voter).subscribe((res)=>{
      console.log("update voter");
      this.allVoter();
   })
 }

}
