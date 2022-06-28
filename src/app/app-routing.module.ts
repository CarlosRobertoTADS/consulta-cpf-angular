import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCpfComponent } from './pages/consulta-cpf/consulta-cpf.component';
import { DetalhesCpfComponent } from './pages/detalhes-cpf/detalhes-cpf.component';

const routes: Routes = [

  { path: '', redirectTo: '/consulta', pathMatch: 'full' },

  {
    path: 'consulta',
    component: ConsultaCpfComponent,
    children: [
      {path: 'detalhes/:cpf', component: DetalhesCpfComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
