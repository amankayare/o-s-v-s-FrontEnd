import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../Entities/candidate';
import { Election } from '../Entities/election';
import { ElectionService } from '../Services/election.service';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-createballot',
  templateUrl: './createballot.component.html',
  styleUrls: ['./createballot.component.css'],
  
})
export class CreateballotComponent implements OnInit {

  Election: Election =new Election();

  

  constructor(private electionService:ElectionService,private router:Router,) { }

  ngOnInit()  {
    this.electionService.election;
    }

    addElection(){
     // this.router.navigate(['/reserve',JSON.stringify(this.Election)]‌​);
    }

  }
