import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { Produto } from '../Models/produto.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../Componentes/dialogo/dialogo.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  UrlDB = "http://localhost:3000/Produtos"
  idEdicao!: number;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http: HttpClient) { }

  criarProduto(): void {
    this.idEdicao = 0
    this.router.navigate(['criar-produto'])
  }

  salvarProduto(produto: Produto): Observable<Produto> {
    if (produto.id == 0) {
      this.mostrarMensagem('Produto criado com sucesso!')
      return this.http.post<Produto>(this.UrlDB, produto)
    }
    else {
      this.mostrarMensagem('Produto editado com sucesso!')
      return this.http.put<Produto>(`${this.UrlDB}/${produto.id}`, produto)
    }
  }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.UrlDB)
  }

  editarProdutoPorId(id: any): Observable<Produto> {
    this.idEdicao = id;
    this.router.navigate(['editar-produto'])
    const buscaPorId = `${this.UrlDB}/${id}`
    return this.http.get<Produto>(buscaPorId)
  }

  excluirProduto(id: any) {
    const excluirPorId = `${this.UrlDB}/${id}`
    this.http.delete<Produto>(excluirPorId)
    .subscribe(() => {
      this.mostrarMensagem("O Produto foi excluido com sucesso!")
      this.dialog.closeAll()
      this.router.navigate(['listar-produtos'])
    },
    error => {
    this.mostrarMensagem("Ocorreu um erro, produto não excluido.");
    this.dialog.closeAll()
    })
  }

  retornarPagina(): void {
    this.router.navigate(['listar-produtos'])
  }

  cancelarCriacao(): void {
    this.router.navigate(['listar-produtos'])
    this.mostrarMensagem("A função foi cancelada.")
  }

  mostrarMensagem(mensagem: string) {
    this.snackBar.open(mensagem, 'X', {
      duration: 3000,
      panelClass: ['snackbar'],
    })
  }

  abrirModal(idProduto: any, tabela: String){
    this.dialog.open(DialogoComponent, {
      data: {
        id: idProduto,
        tabela: tabela
      }
    });
  }
}
