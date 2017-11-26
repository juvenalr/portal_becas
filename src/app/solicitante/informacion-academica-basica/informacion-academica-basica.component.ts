import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {IInformacionAcademicaBasica} from "../../models/informacion.academica.basica.model";
import {IInstitucionEducacionBasica} from "../../models/institucion.educacion.basica.model";
import {ServicioInstitucionEducacionBasica} from "../../services/institucion.educacion.basica.servicio";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;

@Component({
  selector: 'informacion-academica-basica-modal',
  templateUrl: './informacion-academica-basica.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class InformacionAcademicaBasicaComponent implements OnInit {
  informacionAcademicaBasica: IInformacionAcademicaBasica;
  institucionesEducacionBasica : IInstitucionEducacionBasica[] = [];

  @Output() informacionAcademicaBasicaAgregada: EventEmitter<IInformacionAcademicaBasica> = new EventEmitter<IInformacionAcademicaBasica>();

  constructor(private servicioInstitucionEducacionBasica : ServicioInstitucionEducacionBasica){
  }


  agregarInformacionAcademicaBasica(): void {
    console.log(this.informacionAcademicaBasica);

    ///let institucionAcademica : IInstitucionEducacionBasica = this.institucionesEducacionBasica.filter(x => x.id == this.informacionAcademicaBasica.id_institucion_academica_basica);


    this.informacionAcademicaBasicaAgregada.emit({
      ano_inicio: this.informacionAcademicaBasica.ano_inicio,
      ano_fin: this.informacionAcademicaBasica.ano_fin,
      fecha_grado: this.informacionAcademicaBasica.fecha_grado,
      ultimo_grado_escolar: this.informacionAcademicaBasica.ultimo_grado_escolar,
      pruebas_saber: this.informacionAcademicaBasica.pruebas_saber,
      calificacion_pruebas_saber: this.informacionAcademicaBasica.calificacion_pruebas_saber,
      id_institucion_academica_basica: this.informacionAcademicaBasica.id_institucion_academica_basica,
      institucionAcademicaBasica : this.institucionesEducacionBasica.filter(x => x.id == this.informacionAcademicaBasica.id_institucion_academica_basica)[0]
    });

    console.log(this.informacionAcademicaBasicaAgregada);

    this.informacionAcademicaBasica.ano_inicio  = null;
    this.informacionAcademicaBasica.ano_fin = null;
    this.informacionAcademicaBasica.fecha_grado = new Date();
    this.informacionAcademicaBasica.ultimo_grado_escolar = null;
    this.informacionAcademicaBasica.calificacion_pruebas_saber = null;

    $('#informacionAcademicaBasica').modal('toggle');

    //this.$(`#${this.modalId}`).modal({});

  }

  ngOnInit() {

    this.servicioInstitucionEducacionBasica.obtenerInstitucionesEducacionBasica().subscribe(institucionesEducacionBasica =>
      this.institucionesEducacionBasica = institucionesEducacionBasica
    );

    this.informacionAcademicaBasica = {
      ano_inicio  : null,
      ano_fin : null,
      fecha_grado : null,
      ultimo_grado_escolar : null,
      pruebas_saber : false,
      calificacion_pruebas_saber : null,
      id_institucion_academica_basica : 0,
      institucionAcademicaBasica : null
    };

  }
}


