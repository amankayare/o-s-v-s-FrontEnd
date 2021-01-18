import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  container:any;
  constructor() { }

  ngOnInit(): void {
    
    }
    toggleForm() {
      this.container = document.querySelector('.container');
      this.container.classList.toggle('active');
  }


}