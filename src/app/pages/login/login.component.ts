import { Component } from '@angular/core';
import { ConstantService } from '../../constant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
isSignDivVisiable: boolean  = true;

signUpObj: SignUpModel  = new SignUpModel();
loginObj: LoginModel  = new LoginModel();




  constructor(private constantService: ConstantService,private router:Router) {}

  onRegister() {
    console.log('Registering user:', this.signUpObj);
    this.constantService.registerUser(this.signUpObj).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.isSignDivVisiable = false;
        // Optionally log the user in automatically or show a success message
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
    
  }

  onLogin() {
    var username = this.loginObj.email;
    var pass = this.loginObj.password;
    console.log(username+"  "+pass);
    this.constantService.loginUser(this.loginObj)
      .subscribe(
        (response) => {
          debugger
          console.log('User logged in successfully:', response);
          if(!this.isSignDivVisiable){
            this.router.navigate(["/dashboard/"])
          }
        },
        (error) => {
          console.error('Error logging in:', error);
        } 
      );
  }
}
  export class SignUpModel  {
    name: string;
    email: string;
    password: string;
    phonenumber:String;
    gender:String;
  
    constructor() {
      this.email = "";
      this.name = "";
      this.password= "";
      this.phonenumber="";
      this.gender="";
    }
  }
  
  export class LoginModel  { 
    email: string;
    password: string;
  
    constructor() {
      this.email = ""; 
      this.password= "";
    }
  }
  
