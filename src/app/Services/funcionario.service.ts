import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cep } from '../Models/cep.model';
import { map } from 'rxjs/operators';
import { Funcionario } from '../Models/funcionario.model';
import { DialogoComponent } from '../Componentes/dialogo/dialogo.component';



@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  UrlDB = "http://localhost:3000/Funcionarios"
  lista: Funcionario[] = [];
  idEdicao!: number
  cepRetorno: Cep | undefined

  cep: Cep ={
    logradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  }

  resultado: any

  constructor(private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http: HttpClient) { }

  criar(): void {
    this.idEdicao = 0
    this.router.navigate(['criar-funcionario'])
  }

  editar(id: any): Observable<Funcionario> {
    this.idEdicao = id;
    this.router.navigate(['editar-funcionario'])
    const buscaPorId = `${this.UrlDB}/${id}`
    return this.http.get<Funcionario>(buscaPorId)
  }

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    if (funcionario.id == 0) {
      this.mostrarMensagem('Funcionário cadastrado com sucesso!')
      return this.http.post<Funcionario>(this.UrlDB, funcionario)
    }
    else {
      this.mostrarMensagem('Cadastro de Funcionário editado com sucesso!')
      return this.http.put<Funcionario>(`${this.UrlDB}/${funcionario.id}`, funcionario)
    }
  }

  excluir(id: any)  {
      const excluirPorId = `${this.UrlDB}/${id}`
      this.http.delete<Funcionario>(excluirPorId)
      .subscribe(() => {
        this.mostrarMensagem("O Funcionário foi excluido com sucesso!")
        this.dialog.closeAll()
        this.router.navigate(['listar-funcionarios'])
      },
      error => {
      this.mostrarMensagem("Ocorreu um erro, Funcionário não excluido.");
      this.dialog.closeAll()
      })
  }

  // pop-up de confirmação pra exclusão
  modalConfirmacao(idProduto: any, tabela: String){
    this.dialog.open(DialogoComponent, {
      data: {
        id: idProduto,
        tabela: tabela
      }
    });
  }

  listarA(): Funcionario[]{

    this.http.get<Funcionario[]>(this.UrlDB).subscribe(listaProdutos => {
      this.lista = listaProdutos;
    })
    return this.lista
  }

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.UrlDB)
  }

  consultarCEP(cep: string){
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`).pipe(
    map(data => this.cep = this.converterViaCep(data)))
  }

  converterViaCep(data: any): Cep {
    this.cep.logradouro = data.logradouro;
    this.cep.bairro = data.bairro;
    this.cep.cidade = data.localidade;
    this.cep.estado = data.uf;
    return this.cep
  }

  mostrarMensagem(mensagem: string) {
    this.snackBar.open(mensagem, 'X', {
      duration: 3000,
      panelClass: ['snackbar'],
    })
  }

  retornarPagina(): void {
    this.router.navigate(['listar-funcionarios'])
  }
}
