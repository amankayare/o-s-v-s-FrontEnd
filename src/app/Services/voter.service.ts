import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from '../Entities/voter';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http:HttpClient) { 

  }

 // private url="http://localhost:8080/E-Ballot/api/";

  addVoter(voter : Voter) : Observable<any>{

     return this.http.post("http://localhost:8080/E-Ballot/api/addVoter",voter);

  }

  getVoter(id : number):Observable<Voter>{
    return this.http.get<Voter>("http://localhost:8080/E-Ballot/api/getVoter/"+id);
  }


  getAllVoter():Observable<Array<Voter>>{
    return this.http.get<Array<Voter>>("http://localhost:8080/E-Ballot/api/getAllVoter/");
  }

  removeVoter(id : number) :Observable<void>{
    return this.http.delete<void>("http://localhost:8080/E-Ballot/api/removeVoter/"+id);
  }

  modifyVoter(voter : Voter):Observable<String>{
    return this.http.put<String>("http://localhost:8080/E-Ballot/api/modifyVoter/",voter);
  }

  // goToPoll(electionId:number , voterId :number , decrytFile : File):Observable<String>{
     
  //    return this.http.post<String>("http://localhost:8080/E-Ballot/api/goToPoll",);
  // }

}
