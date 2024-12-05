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
    if(this.formData.userName == "admin" && this.formData.password == "admin"){
      console.log("Usuario logado com sucesso", this.formData)

      localStorage.setItem('user', JSON.stringify(this.formData));
      window.location.href = '/home';
    }else{
      alert("Usuario não existe")
      return;
    }
  }
}
