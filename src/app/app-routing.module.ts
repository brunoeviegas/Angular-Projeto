import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppSistemaComponent } from './Componentes/app-sistema/app-sistema.component';
import { CriarFornecedorComponent } from './View/fornecedor/criar-fornecedor/criar-fornecedor.component';

import { ListarFornecedorComponent } from "./View/fornecedor/listar-fornecedor/listar-fornecedor.component";
import { CriarFuncionarioComponent } from './View/funcionario/criar-funcionario/criar-funcionario.component';
import { ListarFuncionarioComponent } from './View/funcionario/listar-funcionario/listar-funcionario.component';
import { HomeComponent } from './View/home/home.component';
import { LoginComponent } from './View/login/login.component';
import { CriarProdutoComponent } from './View/produto/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './View/produto/listar-produto/listar-produto.component';

const routes: Routes = [

  { path: "listar-fornecedores", component: ListarFornecedorComponent },
  { path: "criar-fornecedor", component: CriarFornecedorComponent },
  { path: "editar-fornecedor", component: CriarFornecedorComponent },

  { path: "listar-funcionarios", component: ListarFuncionarioComponent },
  { path: "criar-funcionario", component: CriarFuncionarioComponent },
  { path: "editar-funcionario", component: CriarFuncionarioComponent },

  { path: "listar-produtos", component: ListarProdutoComponent },
  { path: "criar-produto", component: CriarProdutoComponent },
  { path: "editar-produto", component: CriarProdutoComponent },

  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
