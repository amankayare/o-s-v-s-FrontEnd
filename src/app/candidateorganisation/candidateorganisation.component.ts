import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidateorganisation',
  templateUrl: './candidateorganisation.component.html',
  styleUrls: ['./candidateorganisation.component.css']
})
export class CandidateorganisationComponent implements OnInit {
  form: FormGroup;
  constructor(private router:Router,private http:HttpClient,public fb: FormBuilder) {

    
    this.form = this.fb.group({
      cin: [''],
      orgnizationName: [''],
      adharNo:[''],
      excelFile:[null]
    })

}

  ngOnInit(): void {
  }

  uploadFile(event: any) {

    console.log("upload file form");

    const file =(event.target as HTMLInputElement).files![0];
  
    this.form.patchValue({
      excelFile: file
    });
    this.form.get("excelFile")?.updateValueAndValidity();
  }

  submitOrganizationDetails(){
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("orgnizationName", this.form.get("orgnizationName")?.value);
    formData.append("cin", this.form.get("cin")?.value);
    formData.append("excelFile", this.form.get("excelFile")?.value);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

    this.http.post('http://localhost:8080/E-Ballot/api/addOrganization', formData, { headers: headers }).subscribe(
      (response) => console.log(response),
      (error) => console.log(JSON.parse(JSON.stringify(error)))
    )
  }
}
