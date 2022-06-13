import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuncionarioService } from 'src/app/Services/funcionario.service';
import { ProdutoService } from 'src/app/Services/produto.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss']
})
export class DialogoComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService, private funcionarioService: FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  excluirItem(id: number, tabela: String) {
    if (tabela == 'Produto') {
      this.produtoService.excluirProduto(id)
    }
    if (tabela == 'Funcionario') {
      this.funcionarioService.excluir(id)
  }
}
}
