import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  constructor(private auth: AuthService) { }
  usuario: string;
  clave: string;

  ngOnInit() {
  }

  ingresar() {
    this.auth.login(this.usuario, this.clave);
  }
}
