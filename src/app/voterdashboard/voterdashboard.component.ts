import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-voterdashboard',
  templateUrl: './voterdashboard.component.html',
  styleUrls: ['./voterdashboard.component.css']
})
export class VoterdashboardComponent implements OnInit {

  public isValidated = false;
  form: FormGroup;
  voterId: any;
  electionId: any;


  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder) {

    // this.employeeId = 10;
    this.form = this.fb.group({
      securedFile: [null],

    })
  }


  ngOnInit(): void {



    if (!sessionStorage.getItem('voterId') || !sessionStorage.getItem('electionId')) {
      this.router.navigate(['/']);
    } else {
      this.voterId = sessionStorage.getItem('voterId');
      this.electionId = sessionStorage.getItem('electionId');
    }

    console.log(this.voterId);
    console.log(this.electionId);

  }


  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];

    this.form.patchValue({
      securedFile: file
    });
    this.form.get("securedFile")?.updateValueAndValidity();
  }

  validateVoter() {
    var formData: any = new FormData();

    console.log(this.voterId);
    console.log(this.electionId);
    formData.append("decrytFile", this.form.get("securedFile")?.value);
    formData.append("electionId", this.voterId);
    formData.append("voterId", this.electionId);

    let headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "my_token");
    headers.append("responseType", "text");


    this.http.post('http://localhost:8080/E-Ballot/api/goToPoll', formData, { headers: headers }).subscribe(
      (response) => {
        console.log(response)

      },
      (error) => console.log(JSON.parse(JSON.stringify(error)))
    )


  }





}
