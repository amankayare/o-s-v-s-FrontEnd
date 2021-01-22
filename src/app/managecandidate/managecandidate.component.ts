import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Candidate } from '../Entities/candidate';
import { CandidateService } from '../Services/candidate.service';

@Component({
  selector: 'app-managecandidate',
  templateUrl: './managecandidate.component.html',
  styleUrls: ['./managecandidate.component.css']
})
export class ManagecandidateComponent implements OnInit {
  form: FormGroup;

  candidate : Candidate = new Candidate();

  listOfCandidate : Candidate[] | undefined;

  public ImgUrl : String | undefined


  fullName: String | undefined
  email: String | undefined
  adharNo: number | undefined
  symbol: String | undefined
  employeeId: String | undefined
  candidateId:number | undefined


  constructor(private http:HttpClient,private candidateService:CandidateService,private fb:FormBuilder,private sanitizer: DomSanitizer) { 


    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:0,
      symbol:[null],
      employeeId:[''],
      candidateId:['']

    })

  }

  
public getSantizeUrl(url : any) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

 
  allCandidate(){
    this.candidateService.getAllCandidate().subscribe((res)=>{
      this.listOfCandidate=res;
    })
  }

  ngOnInit(): void {
    this.allCandidate();
  }

  load(){
    this.ngOnInit();
  }

  async updateCandidate(id : number){
     this.candidate=await this.candidateService.getCandidate(id).toPromise();
     console.log(this.candidate);
     
     this.fullName=this.candidate.fullName
     this.email=this.candidate.email
     this.adharNo=this.candidate.adharNo
     this.employeeId=this.candidate.employeeId
     this.symbol=this.candidate.symbol
     this.candidateId=this.candidate.candidateId
      
  }



  updateCandidateDetails(){

    this.candidateService.modifyCandidate(this.candidate).subscribe((res)=>{
        console.log("update candidate");
        alert("Candidate updated");
      })
  }

  cId:any;

  deleteCandidate(Id: any){
     this.cId=Id;
  }


  async deleteCandidateProfile(){
     var del= await this.candidateService.removeCandidate(this.cId).toPromise();
      if(del!=null){
        alert("Record deleted");
        this.load();
      }else{
        alert("Record is not deleted");
      }
  }


  uploadFile(event: any) {
    const file =(event.target as HTMLInputElement).files![0];
  
    this.form.patchValue({
      symbol: file
    });
    this.form.get("symbol")?.updateValueAndValidity();
  }
  
    async modifyCandidate(employeeId : any,fullName : any,adharNo: any,email: any,candidateId: any){
      console.log("modify candidate");
      
      var formData: any = new FormData();
      formData.append("fullName",fullName);
      formData.append("email", email);
      formData.append("adharNo",adharNo);
      formData.append("employeeId",employeeId);
      formData.append("candidateId",candidateId);
      console.log(" sysmbol "+this.form.get("symbol")?.value);
      if(this.form.get("symbol")?.value==null){
        console.log("If");
        alert("Please choose symbol");
      }else{
        console.log("else");
        formData.append("symbol", this.form.get("symbol")?.value);
        console.log(this.form.get("symbol")?.value);
      }
      
  
      console.log(fullName+" "+employeeId+ " "+adharNo+ " "+email);

      console.log(formData);

      let headers = new HttpHeaders();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", "my_token");
      headers.append("responseType", "text");
  
    var modify = await this.http.put('http://localhost:8080/E-Ballot/api/modifyCandidate', formData, { headers: headers }).toPromise();
      if(modify!=null){
        this.load();
         alert("Record updated");
      }else{
        alert("Not updated");
      }
         
    }

}
