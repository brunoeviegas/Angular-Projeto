import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.scss']
})
export class ListarFornecedorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  EventoCriarFornecedor(): void
  {
    this.router.navigate(['criar-fornecedor'])
  }

}
