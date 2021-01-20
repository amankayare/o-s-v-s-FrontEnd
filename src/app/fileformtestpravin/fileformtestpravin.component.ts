import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fileformtestpravin',
  templateUrl: './fileformtestpravin.component.html',
  styleUrls: ['./fileformtestpravin.component.css']
})
export class FileformtestpravinComponent implements OnInit {


  form: FormGroup;

  ngOnInit(): void {
  }



  constructor(private http: HttpClient, public fb: FormBuilder) {

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
    formData.append("electionId", this.form.get("electionId")?.value);
    formData.append("symbol", this.form.get("symbol")?.value);


    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `my_token`);

    this.http.post('http://localhost:8080/E-Ballot/api/addCandidate', formData, { headers: headers }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

  }
}
