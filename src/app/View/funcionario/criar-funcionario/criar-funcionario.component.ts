import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/Models/cep.model';
import { Funcionario } from 'src/app/Models/funcionario.model';
import { FuncionarioService } from 'src/app/Services/funcionario.service';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit {



  funcionario: Funcionario = {
    id: 0,
    nome: '',
    cpf: '',
    tipo: '',
    email: '',
    senha: '',
    cep: '',
    complemento: ''
  }

  endereco: string = ''
  estado: string = ''
  cidade: string = ''
  bairro: string = ''

  cep: Cep = {
    logradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  }

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    if (this.funcionarioService.idEdicao == 0) {
      this.funcionario.id = 0;
    }
    if (this.funcionarioService.idEdicao != 0) {
      this.funcionarioService.editar(this.funcionarioService.idEdicao).subscribe(
      dataJson => { this.funcionario = dataJson;
      this.consultarCep()
      })
    }
  }

  consultarCep() {
    this.funcionarioService.consultarCEP(this.funcionario.cep).subscribe(dadosViaCep => {
      this.endereco = dadosViaCep.logradouro
      this.bairro = dadosViaCep.bairro
      this.cidade = dadosViaCep.cidade
      this.estado = dadosViaCep.estado
    }, error => {
      this.funcionarioService.mostrarMensagem("Digite um Cep válido.")
    })
  }

  modalConfirmacao (id: any, tabela: String): void {
    this.funcionarioService.modalConfirmacao(id, tabela)
  }

  salvarProduto(): void {
    this.funcionarioService.salvar(this.funcionario).subscribe(() => {
      //this.funcionarioService.retornarPagina();
    });
  }
  cancelar(): void {
    this.funcionarioService.retornarPagina();
  }

}
