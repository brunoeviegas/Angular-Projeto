import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Funcionario } from 'src/app/Models/funcionario.model';
import { FuncionarioService } from 'src/app/Services/funcionario.service';

export class ListarDataSource extends DataSource<Funcionario> {

  data: Funcionario[] = []
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private funcionarioService: FuncionarioService) {

    super( );
    this.funcionarioService.listar().subscribe(listaFuncionarios => {
      this.data = listaFuncionarios;
    })

  }

  connect(): Observable<Funcionario[]> {
    if (this.paginator && this.sort) {
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }
  disconnect(): void {}

  private getPagedData(data: Funcionario[]): Funcionario[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(data: Funcionario[]): Funcionario[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'tipo': return compare(a.tipo, b.tipo, isAsc);
        default: return 0;
      }
    });
  }
  filtro(filtro: string): Funcionario[] {
    filtro = filtro.trim().toLowerCase();
    this.data = this.funcionarioService.filtrar(filtro);
    return this.data;
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


