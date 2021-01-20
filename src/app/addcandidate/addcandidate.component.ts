import { HttpClient } from '@angular/common/http';
import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit  {

  form: FormGroup;

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