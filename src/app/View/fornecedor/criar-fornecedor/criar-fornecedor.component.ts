import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Fornecedor } from 'src/app/Models/fornecedor.model';

@Component({
  selector: 'app-criar-fornecedor',
  templateUrl: './criar-fornecedor.component.html',
  styleUrls: ['./criar-fornecedor.component.scss']
})
export class CriarFornecedorComponent implements OnInit {

  inicializadorNumber!: number;

  fornecedor: Fornecedor = {
    ativo: false,
    tipo: 'Fornecedor',
    nome: '',
    cnpj: this.inicializadorNumber,
    numero:  this.inicializadorNumber,
    cep: '',
    complemento: '',
    email: '',
    senha: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
