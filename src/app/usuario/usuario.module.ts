import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioService} from './usuario.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [UsuarioListComponent, UsuarioDetailComponent],
    providers: [UsuarioService]
})
export class UsuarioModule {}