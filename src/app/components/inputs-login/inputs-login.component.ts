import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs-login',
  templateUrl: './inputs-login.component.html',
  styleUrl: './inputs-login.component.scss'
})
export class InputsLoginComponent {

  formData = {
    userName: '',
    password: ''
  }

  onSubmit():void {
    console.log(this.formData)
  }
}
