export class Candidate {
    public candidateId : number | undefined;
    public fullName : string | undefined;
    public email : string | undefined;
    public symbol : File | undefined;
    public voteEarned : number | undefined;
    public electionId : number | undefined;
    public candidateElectionList : Candidate[] | undefined;
}
