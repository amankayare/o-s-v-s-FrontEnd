import { Election } from "./election";

export class Voter {
    public voterId : number | undefined;
    public fullName : string | undefined;
    public adharNo : number | undefined;
    public password : string | undefined;
    public voted : number | undefined;
    public email : string | undefined;
    public electionId : number | undefined;
    public voterElectionList : Election[] | undefined;
}
