import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  constructor(private _fb: FormBuilder) {
 
  }
  createRegisterForm() {
    this.registerForm = this._fb.group({
      name: ['', Validators.required,Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneno: ['', [Validators.required,Validators.minLength(10)]],
      city: ['', [Validators.required]],

    });
    // this.registerForm.reset();
  }
  ngOnInit() {
    this.createRegisterForm();
  }

  onSubmit(){

  }

}
