import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/Models/funcionario.model';
import { FuncionarioService } from 'src/app/Services/funcionario.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarios2!: MatTableDataSource<any>;
  colunasTabela: string[] = ['ID', 'Nome', 'Tipo', 'Email', 'Opcao']
  @ViewChild(MatSort) ordenar!: MatSort;
  @ViewChild(MatPaginator) paginar!: MatPaginator;
  buscar: string = ''

  constructor(private funcionarioService: FuncionarioService,
    ) { }

  ngOnInit(): void {
    this.listar()

    this.funcionarios2.sort = this.ordenar;
    this.funcionarios2.paginator = this.paginar;

  }

  criar(): void
  {
    this.funcionarioService.criar();
  }

  listar(): void
  {
    this.funcionarioService.listar().subscribe(listaFuncionarios => {
      this.funcionarios = listaFuncionarios;
      this.funcionarios2 = new MatTableDataSource(this.funcionarios)
    })
  }

  editarProdutoPorID(id: any): void{
    this.funcionarioService.editar(id).subscribe();
  }

}
