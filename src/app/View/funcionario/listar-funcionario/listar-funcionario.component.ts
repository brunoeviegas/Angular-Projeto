import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/funcionario.model';
import { FuncionarioService } from 'src/app/Services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.listar()

  }

  criar(): void
  {
    this.funcionarioService.criar();
  }

  listar(): void
  {
    this.funcionarioService.listar().subscribe(listaProdutos => {
      this.funcionarios = listaProdutos;
    })
  }

  editarProdutoPorID(id: any): void{
    this.funcionarioService.editar(id).subscribe();
  }

}
