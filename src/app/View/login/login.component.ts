import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Login } from 'src/app/Models/login.model';
import { FuncionarioService } from 'src/app/Services/funcionario.service';
import { Funcionario } from 'src/app/Models/funcionario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    senha: '',
  }
  email!: string;
  senha!: string;
  tipoAcesso!: string;


  funcionario: Funcionario = {
    id: 0,
    nome: '',
    cpf: '',
    tipo: '',
    email: '',
    senha: '',
    cep: '',
    complemento: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  fazerLogin(){
    this.loginService.logaDireto();
    //this.loginService.acessar(this.login)
}
}
