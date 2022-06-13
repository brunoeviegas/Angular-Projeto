import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Models/produto.model';
import { ProdutoService } from 'src/app/Services/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.listarProdutos();
  }

  criarProduto(): void
  {
    this.produtoService.criarProduto();
  }

  listarProdutos(): void
  {
    this.produtoService.listarProdutos().subscribe(listaProdutos => {
      this.produtos = listaProdutos;
    })
  }

  editarProdutoPorID(id: any): void{
    this.produtoService.editarProdutoPorId(id).subscribe();
  }
}
