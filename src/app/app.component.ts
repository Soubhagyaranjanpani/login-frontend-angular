import { Component } from '@angular/core';
import { ConstantService } from './constant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: any = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: ''
  };
  loginData: any = {
    email: '',
    password: ''
  };

  constructor(private constantService: ConstantService) {}

  onRegister() {
    this.constantService.registerUser(this.userData)
      .subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          // Optionally, you can reset the form here
          this.resetForm();
        },
        (error) => {
          console.error('Error registering user:', error);
        }
      );
  }

  resetForm() {
    this.userData = {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      gender: ''
    };
    this.loginData = {
      email: '',
      password: ''
    };
  }
 onLogin() {
    this.constantService.loginUser(this.userData)
      .subscribe(
        (response) => {
          console.log('User logged in successfully:', response);
          // Optionally, you can redirect the user to another page upon successful login
          // Example: this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Error logging in:', error);
          // Handle error, e.g., display error message to the user
        }
      );
  }
}

