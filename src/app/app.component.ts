import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('form', {static: true}) signupForm: NgForm;
  defSubscription= 'basic';
  submitted = false;
  userdata = {
    email: '',
    password: '',
    subscription: ''
  }

  ngOnInit(){

  }

  suggestEmail(){
    const suggestedEmail = 'Bernhardt.bdt@gmail.com';
    this.signupForm.form.patchValue({
      userData: {
        email : suggestedEmail
      }
    })
  }

  onSubmit(){
    console.log(this.signupForm)
    this.userdata.email = this.signupForm.value.userData.email;
    this.userdata.password = this.signupForm.value.userData.password;
    this.userdata.subscription = this.signupForm.value.userData.subscription;
    this.signupForm.reset();
    this.submitted = true;
  }
}
