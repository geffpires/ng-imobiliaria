import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarClienteComponentComponent } from './cadastrar-cliente-component/cadastrar-cliente-component.component';


const routes: Routes = [
  { path: 'cliente/new', component: CadastrarClienteComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
