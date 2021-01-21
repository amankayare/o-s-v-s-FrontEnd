import { HttpClient } from '@angular/common/http';
import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> 981df9f9b93505105108d0f0e2d4319d3c371f09
@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit  {

  form: FormGroup;
<<<<<<< HEAD

  constructor(private router:RouterModule,private http:HttpClient,public fb: FormBuilder) {

    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      adharNo:[''],
      symbol:[null],
      electionId:['']

    })

}

ngOnInit() { }

uploadFile(event: any) {
  const file =(event.target as HTMLInputElement).files![0];

  this.form.patchValue({
    symbol: file
  });
  this.form.get("symbol")?.updateValueAndValidity();
=======
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
>>>>>>> 981df9f9b93505105108d0f0e2d4319d3c371f09
}

submitForm() {
  console.log(this.form.value)
  var formData: any = new FormData();
  formData.append("name", this.form.get("fullName")?.value);
  formData.append("name", this.form.get("email")?.value);
  formData.append("name", this.form.get("adharNo")?.value);
  formData.append("name", this.form.get("electionId")?.value);
  formData.append("avatar", this.form.get("symbol")?.value);

  this.http.post('http://localhost:8080/E-Ballot/api/addCandidate', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )

}

  // uploadFile(event: { target: HTMLInputElement; }) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({
  //     avatar: file
  //   });
  //   this.form.get('avatar').updateValueAndValidity()
  // }




}