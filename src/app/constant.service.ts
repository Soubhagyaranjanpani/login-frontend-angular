import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor(private http: HttpClient) { }

  // Method to register a new user
  registerUser(signUpObj: any): Observable<any> {
    return this.http.post<any>('http://localhost:8082/api/v1/auth/signup', signUpObj);
  }

  // Method to login an existing user
  loginUser(loginobj: any): Observable<any> {
    return this.http.post<any>('http://localhost:8082/api/v1/auth/sign-in', loginobj);
  }
}
