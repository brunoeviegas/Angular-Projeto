import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-app-sistema',
  templateUrl: './app-sistema.component.html',
  styleUrls: ['./app-sistema.component.scss']
})
export class AppSistemaComponent implements OnInit {


  // deixar em true para não precisar sempre a senha no desenvolvimento, em produção
  // falso para validar o acesso a páginas do sistema
  userAutenticado = true;

  constructor(private login: LoginService,) { }

  ngOnInit(): void {
    // Metodo event emitter para sempre validar o login
    this.login.autenticacao.subscribe(
    autenticado => this.userAutenticado = autenticado);
  }
}
