import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../sharedComponents/shared.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
[x: string]: any;
  email:string='';
  password:string='';
  // private navigationService=inject(NavigationService);
  // private authService=inject(Authser)

  login(loginForm:NgForm): void{
  
    
  }

  onPasswordChanged(pass:string):void{
    console.log('password',pass);
  }

  onEmailChanged(email:string):void{
    console.log('password',email);
  }

}
