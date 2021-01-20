import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {

  form: FormGroup;
  public electionId:Number
  ngOnInit(): void {
  }



  constructor(private http: HttpClient, public fb: FormBuilder) {

    this.electionId = 10;
    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo: [''],
      symbol: [],
      electionId: ['']

    })


  }



  uploadFile(event: any) {
    console.log("upload File");
    const file = (event.target as HTMLInputElement).files![0];

    this.form.patchValue({
      symbol: file
    });
    this.form.get("symbol")?.updateValueAndValidity();
  }

  submitForm() {
    console.log("submit form");
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("fullName", this.form.get("fullName")?.value);
    formData.append("email", this.form.get("email")?.value);
    formData.append("adharNo", this.form.get("adharNo")?.value);
    formData.append("electionId", this.electionId);
    formData.append("symbol", this.form.get("symbol")?.value);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");

    

    this.http.post('http://localhost:8080/E-Ballot/api/addCandidate', formData, { headers: headers }).subscribe(
      (response) => console.log(response),
      (error) => console.log(JSON.parse(JSON.stringify(error)))
    )

  }
}
