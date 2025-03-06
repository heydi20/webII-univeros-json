import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormularioLoginComponent } from '../../components/formulario-login/formulario-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormularioLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
