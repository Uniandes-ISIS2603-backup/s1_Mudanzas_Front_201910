import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';
import { UsuarioDetail } from '../usuario-detail';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario-list.component.html',
    styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

    usuario_login: string;
    selectedUsuario: Usuario;

    /**
     * Constructor for the component
     * @param usuarioService The author's services provider
     */
    constructor(private usuarioService: UsuarioService) { }

    /**
     * The list of usuarios which belong to the BookStore
     */
    usuarios: Usuario[];

    onSelected(login: string): void {
        this.usuario_login = login;
        this.selectedUsuario = new UsuarioDetail();
        this.getUsuarioDetail();
    }

    getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_login)
            .subscribe(selectedUsuario => {
                this.selectedUsuario = selectedUsuario;
            });
    }

    /**
     * Asks the service to update the list of usuarios
     */
    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => this.usuarios = usuarios);
    }

    /**
     * This will initialize the component by retrieving the list of usuarios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getUsuarios();
    }
}