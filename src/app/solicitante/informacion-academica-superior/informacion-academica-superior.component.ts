/**
 * Created by edgaguil on 25/10/2017.
 */
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {IInformacionAcademicaSuperior} from "../../models/informacion.academica.superior.model";
import {IInstitucionEducacionSuperior} from "../../models/institucion.educacion.superior";
import {ServicioInstitucionEducacionSuperior} from "../../services/institucion.educacion.superior.servicio";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;

@Component({
  selector: 'informacion-academica-superior-modal',
  templateUrl: './informacion-academica-superior.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class InformacionAcademicaSuperiorComponent implements OnInit {

  informacionAcademicaSuperior: IInformacionAcademicaSuperior;
  institucionesEducacionSuperior : IInstitucionEducacionSuperior[] = [];

  @Output() informacionAcademicaSuperiorAgregada: EventEmitter<IInformacionAcademicaSuperior> = new EventEmitter<IInformacionAcademicaSuperior>();

  constructor(private servicioInstitucionEducacionSuperior : ServicioInstitucionEducacionSuperior){
  }

  agregarInformacionAcademicaSuperior(): void {
    console.log(this.informacionAcademicaSuperior);

    this.informacionAcademicaSuperiorAgregada.emit({
      id_institucion_academica_superior: this.informacionAcademicaSuperior.id_institucion_academica_superior,
      ano_inicio: this.informacionAcademicaSuperior.ano_inicio,
      ano_fin: this.informacionAcademicaSuperior.ano_fin,
      fecha_grado: this.informacionAcademicaSuperior.fecha_grado,
      nombre_programa: this.informacionAcademicaSuperior.nombre_programa,
      semestres_programa: this.informacionAcademicaSuperior.semestres_programa,
      semestres_cursados: this.informacionAcademicaSuperior.semestres_cursados,
      titulo_obtenido: this.informacionAcademicaSuperior.titulo_obtenido,
      cantidad_creditos: this.informacionAcademicaSuperior.cantidad_creditos,
      registro_calificado: this.informacionAcademicaSuperior.registro_calificado,
      tipo_programa: this.informacionAcademicaSuperior.tipo_programa,
      institucionAcademicaSuperior : this.institucionesEducacionSuperior.filter(x => x.id == this.informacionAcademicaSuperior.id_institucion_academica_superior)[0]
    });

    this.informacionAcademicaSuperior.id_institucion_academica_superior = null;
    this.informacionAcademicaSuperior.ano_inicio = null;
    this.informacionAcademicaSuperior.ano_fin = null;
    this.informacionAcademicaSuperior.fecha_grado = null;
    this.informacionAcademicaSuperior.nombre_programa = null;
    this.informacionAcademicaSuperior.semestres_programa = null;
    this.informacionAcademicaSuperior.semestres_cursados = null;
    this.informacionAcademicaSuperior.titulo_obtenido = null;
    this.informacionAcademicaSuperior.cantidad_creditos = null;
    this.informacionAcademicaSuperior.registro_calificado = null;
    this.informacionAcademicaSuperior.tipo_programa = null;
    this.informacionAcademicaSuperior.institucionAcademicaSuperior = null;

    $('#informacionAcademicaSuperior').modal('toggle');
  }

  ngOnInit() {

    this.servicioInstitucionEducacionSuperior.obtenerInstitucionesEducacionSuperior().subscribe(institucionesEducacionSuperior =>
      this.institucionesEducacionSuperior = institucionesEducacionSuperior
    );

    this.informacionAcademicaSuperior = {
      id_institucion_academica_superior: 0,
      ano_inicio: null,
      ano_fin: null,
      fecha_grado: null,
      nombre_programa: null,
      semestres_programa: null,
      semestres_cursados: null,
      titulo_obtenido: null,
      cantidad_creditos: null,
      registro_calificado: null,
      tipo_programa: null,
      institucionAcademicaSuperior : null
    };
  }
}


