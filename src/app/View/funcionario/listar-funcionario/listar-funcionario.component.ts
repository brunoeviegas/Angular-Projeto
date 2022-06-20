import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Funcionario } from 'src/app/Models/funcionario.model';
import { FuncionarioService } from 'src/app/Services/funcionario.service';
import { ListarFuncionarioDataSource } from './listar-funcionario-datasource';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Funcionario>;
  dataSource: ListarFuncionarioDataSource;
  colunas = ['id', 'nome', 'tipo', 'email', 'opcao'];

  constructor(private funcionarioService: FuncionarioService,) {
    this.dataSource = new ListarFuncionarioDataSource(funcionarioService);
  }

  ngOnInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    //this.renomearPaginador()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    this.renomearPaginador()
  }

  renomearPaginador() {
    this.paginator._intl.itemsPerPageLabel = 'Visualização'
    this.paginator._intl.firstPageLabel = 'Primeira página'
    this.paginator._intl.lastPageLabel = 'Última página'
    this.paginator._intl.nextPageLabel = 'Próxima página'
    this.paginator._intl.previousPageLabel = 'Página anterior'
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) { return `0 de ${length}`; }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };

  }

  editar(id: any): void {
    this.funcionarioService.editar(id).subscribe();
  }

  criar(): void {
    this.funcionarioService.criar();
  }

  filtro(event: Event) {
    this.table.dataSource = this.dataSource.filtro((event.target as HTMLInputElement).value)

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    //this.renomearPaginador()
  }
}
