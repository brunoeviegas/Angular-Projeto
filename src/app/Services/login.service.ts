import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Funcionario } from '../Models/funcionario.model';
import { Login } from '../Models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UrlDB = "http://localhost:3000/Funcionarios"
  autenticacao = new EventEmitter<boolean>();

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

  constructor(private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient,) { }

  logaDireto(): void {
    //método criado para autenticar automaticamente para testar funções
    this.autenticacao.emit(true)
    this.router.navigate(['home'])
  }

  acessar(login: Login) {
    const consulta = `${this.UrlDB}?email=${login.email}&senha=${login.senha}`
    this.http.get<Funcionario[]>(consulta).subscribe(resultado => {

      if (resultado.length == 0 || resultado == null) {
        this.mostrarMensagem("Os dados informados estão Incorretos, digite novamente.");
      } else if (resultado.length == 1) {
        // recebe a consulta da lista
        this.funcionario = resultado[0]
        // valida dados
        if (this.funcionario.email == login.email && this.funcionario.senha == login.senha) {
          this.autenticacao.emit(true)
          this.router.navigate(['home'])
          this.mostrarMensagem('Bem-Vindo ao Ateliê JakCosturas: ' + this.funcionario.nome)
        } else {
          this.mostrarMensagem("Usuário ou senha digitado incorretamente");
        }
      } else {
        this.mostrarMensagem("ERRO, contate o Administrador.");
      }
    })
  }

  desconectar(): void {
    this.autenticacao.emit(false)
    this.router.navigate(['login'])
    this.mostrarMensagem('Agradecemos a visita, volte sempre!')
  }

  mostrarMensagem(mensagem: string) {
    this.snackBar.open(mensagem, 'X', {
      duration: 3000,
      panelClass: ['snackbar'],
    })
  }
}
