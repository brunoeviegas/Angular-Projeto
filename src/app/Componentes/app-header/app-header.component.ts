import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/funcionario.model';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  funcionario!: Funcionario;
  constructor(private login: LoginService) {
   }

  ngOnInit() {
    this.funcionario = this.login.funcionario;
  }

  desconectar(){
    this.login.desconectar();
  }

  editarPerfil(){

  }
}
