import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './View/login/login.component';
import { AppSistemaComponent } from './Componentes/app-sistema/app-sistema.component';
import { AppHeaderComponent } from './Componentes/app-header/app-header.component';
import { AppMenuComponent } from './Componentes/app-menu/app-menu.component';
import { DialogoComponent } from './Componentes/dialogo/dialogo.component';
import { CriarFornecedorComponent } from './View/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { ListarFornecedorComponent } from './View/fornecedor/listar-fornecedor/listar-fornecedor.component';
import { CriarFuncionarioComponent } from './View/funcionario/criar-funcionario/criar-funcionario.component';
import { ListarFuncionarioComponent } from './View/funcionario/listar-funcionario/listar-funcionario.component';
import { CriarProdutoComponent } from './View/produto/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './View/produto/listar-produto/listar-produto.component';
import { LoginService } from './Services/login.service';
import { HomeComponent } from './View/home/home.component';
import { AppFooterComponent } from './Componentes/app-footer/app-footer.component';
import { AppBodyComponent } from './Componentes/app-body/app-body.component';
import { ListarComponent } from './View/funcionario/listar/listar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBodyComponent,
    AppSistemaComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    CriarFornecedorComponent,
    ListarFornecedorComponent,
    CriarFuncionarioComponent,
    ListarFuncionarioComponent,
    CriarProdutoComponent,
    ListarProdutoComponent,
    DialogoComponent,
    HomeComponent,
    ListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
