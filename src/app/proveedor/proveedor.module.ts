import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ProveedorListComponent} from './proveedor-list/proveedor-list.component';
import {ProveedorService} from './proveedor.service';
import { ConductorModule } from '../conductor/conductor.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { ProveedorEditComponent } from './proveedor-edit/proveedor-edit.component';
import { VehiculoModule } from '../vehiculo/vehiculo.module';
import { SubastaModule } from '../subasta/subasta.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuthModule } from '../auth/auth.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ConductorModule,
        CommonModule,
        FormsModule,
        VehiculoModule,
        SubastaModule,
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        AuthModule
    ],
    declarations: [ProveedorListComponent,  ProveedorDetailComponent, ProveedorCreateComponent, ProveedorEditComponent],
    providers: [ProveedorService],
    bootstrap: [ProveedorListComponent]
})
export class ProveedorModule {}