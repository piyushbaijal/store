import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  password: any;

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post('https://reqres.in/api/login', data, httpOptions).subscribe((res: any) => {
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/addProduct']);
      }
    });
  }
}
