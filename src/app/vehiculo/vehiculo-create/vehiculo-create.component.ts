import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { ToastrService } from 'ngx-toastr';
import { Vehiculo } from '../vehiculo';

@Component({
    selector: 'app-vehiculo-create',
    templateUrl:'./vehiculo-create.component.html',
    styleUrls:['./vehiculo-create.component.css']
    })
export class VehiculoCreateComponent implements OnInit {

  constructor(
    private vehiculoService: VehiculoService,
    private toastrService: ToastrService
  ) { }

  @Input() loginProveedor: string;

  vehiculo: Vehiculo;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new usuario
  */
  @Output() create = new EventEmitter();

  /**
  * Creates an usuario
  */
  createVehiculo(): Vehiculo {
    this.vehiculoService.createVehiculo(this.loginProveedor ,this.vehiculo)
      .subscribe(vehiculo => {
        this.vehiculo = vehiculo;
        this.create.emit();
        this.toastrService.success("El vehiculo fue creado", "Creacion de Vehiculo");

      });
    return this.vehiculo;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    console.log(this.loginProveedor);
    this.vehiculo = new Vehiculo();
  }

}


