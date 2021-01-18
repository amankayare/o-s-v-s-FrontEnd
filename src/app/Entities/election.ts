import { Candidate } from "./candidate";
import { Voter } from "./voter";

export class Election {
    public  electionId : number | undefined; 
    public  name : string | undefined; 
    public  startDate : string | undefined; 
    public  endDate : string | undefined; 
    public  resultDate : string | undefined; 
    public voterList : Voter[] |undefined ;
    public candidateList : Candidate[] |undefined ;
}
