import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaCpfComponent } from './pages/consulta-cpf/consulta-cpf.component';
import { DetalhesCpfComponent } from './pages/detalhes-cpf/detalhes-cpf.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './shared/components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FooterComponent } from './shared/components/footer/footer.component'
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DialogSimpleComponent } from './shared/components/dialog-simple/dialog-simple.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    ConsultaCpfComponent,
    DetalhesCpfComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DialogSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
