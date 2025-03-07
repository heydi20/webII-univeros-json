import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {

  constructor(private servicio:LoginService, private route:Router){}
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(["login"]);
  }

}
