/**
 * Created by edgaguil on 8/09/2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IExperienciaLaboral} from "../../models/experiencia.laboral.model";

declare var $: any;

@Component({
  selector: 'experiencia-laboral-modal',
  templateUrl: './experiencia-laboral-solicitante.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class ExperienciaLaboralSolicitanteComponent implements OnInit {

  experienciaLaboral : IExperienciaLaboral;

  @Output() experienciaLaboralAgregada : EventEmitter<IExperienciaLaboral> = new EventEmitter<IExperienciaLaboral>();


  agregarExperiencia() : void {
    console.log(this.experienciaLaboral);

    this.experienciaLaboralAgregada.emit({
      nombre_empresa : this.experienciaLaboral.nombre_empresa,
      cargo : this.experienciaLaboral.cargo,
      fecha_inicio : this.experienciaLaboral.fecha_inicio,
      fecha_fin : this.experienciaLaboral.fecha_fin
    });

    this.experienciaLaboral.nombre_empresa = '';
    this.experienciaLaboral.cargo = '';
    this.experienciaLaboral.fecha_fin = null;
    this.experienciaLaboral.fecha_inicio = null;

    //$('#simple-modal').modal('toggle');
    $('#experienciaLaboral').modal('toggle');
  }

  ngOnInit() {
    this.experienciaLaboral = {
      nombre_empresa : '',
      cargo : '',
      fecha_fin : null,
      fecha_inicio : null
      // fecha_fin : '',
      // fecha_inicio : ''
    };

  }
}

