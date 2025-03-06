import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor(private servicio:LoginService){}
  email:any;
  password:any;

  login(formulario:any){
    //console.log(formulario.value);
    this.servicio.postLogin(formulario.value).subscribe(acceso=>{ //para traer el token
      //console.log(acceso)
      let token=acceso.accessToken
      if(token!=''){//ingreso los valores correctos con email y contraseña
      localStorage.setItem("login","true")//decirle al guardian cuando sea true que se despegue la ruta de ingreso
      }
    })
  }

  /*ngOnInit(){
    this.servicio.getLogin().subscribe();
  }*/






}
