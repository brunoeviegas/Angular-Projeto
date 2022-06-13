import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Models/produto.model';
import { ProdutoService } from 'src/app/Services/produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})

export class CriarProdutoComponent implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
  }

  constructor(
    private produtoService: ProdutoService
    ) { }

  ngOnInit(): void {
    if (this.produtoService.idEdicao == 0) {
      this.produto.id = 0;
    }
    if (this.produtoService.idEdicao != 0) {
      this.produtoService.editarProdutoPorId(this.produtoService.idEdicao).subscribe(produtoEdicao => {
        this.produto = produtoEdicao;
      })
    }
  }

  salvarProduto(): void {
    this.produtoService.salvarProduto(this.produto).subscribe(() => {
      this.produtoService.retornarPagina();
    });
  }

  excluirProduto (id: any, tabela: String): void {
    this.produtoService.abrirModal(id, tabela)
  }

  cancelarCriacao(): void {
    this.produtoService.cancelarCriacao();
  }
}
