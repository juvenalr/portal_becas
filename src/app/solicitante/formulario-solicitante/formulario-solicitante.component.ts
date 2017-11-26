import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";
import {SolicitanteService} from "../../services/solicitante.service";
import {ServicioPais} from "../../services/pais.servicio";
import {ServicioTipoEntidad} from "../../services/tipo.entidad.servicio";
import {ISolicitante} from "../../models/solicitante.model";
import {ServicioTipoDocumento} from "../../services/tipo.documento.servicio";
import {ServicioGenero} from "../../services/genero.servicio";
import {ServicioTipoPoblacion} from "../../services/tipo.poblacion.servicio";
import {IPais} from "../../models/pais.model";
import {IGenero} from "../../models/genero.model";

@Component({
  selector: 'app-formulario-solicitante',
  templateUrl: './formulario-solicitante.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }    
  `]
})
export class FormularioSolicitanteComponent implements OnInit {

  // formSolicitante : FormGroup;
  // private numeroDocumento : FormControl;
  // private nombres : FormControl;
  // private apellidos : FormControl;

  tipoDocumentos;
  generos : IGenero[];
  tiposPoblacion;
  paises : IPais[];
  departamentos;

  constructor(private router : Router , private servicioSolicitante : SolicitanteService, private servicioPais : ServicioPais
    , private servicioTipoDocumento : ServicioTipoDocumento, private servicioGenero : ServicioGenero
    , private servicioTipoPoblacion : ServicioTipoPoblacion ) {
  }

  ngOnInit() {
    this.tipoDocumentos = this.servicioTipoDocumento.obtenerTipoDocumentos();
    //this.generos = this.servicioGenero.obtenerGeneros();
    this.tiposPoblacion = this.servicioTipoPoblacion.obtenerTipoPoblacion();
    //this.paises = this.servicioPais.obtenerPaises();
    this.servicioPais.obtenerPaises().subscribe(paises => this.paises = paises);
    this.servicioGenero.obtenerGeneros().subscribe(generos => this.generos = generos);
  }

  // registrarSolicitante(formValues)
  // {
  //   console.log(formValues);
  // }



  crearSolicitante(formValues){
    console.log(formValues);
    this.servicioSolicitante.crearSolicitante(formValues)
    //.finally(() => this.router.navigate(['/oferente/confirmacion-creacion-oferente'])).subscribe();
      .subscribe(event => { this.router.navigate(['/oferente/confirmacion-creacion-oferente']) })
  }


  solicitante = {
    login : "",
    usuario : {

    }
  };


  valorSeleccionadoTipoDocumento = 0;
  valorSeleccionadoGenero = 0;
  valorSeleccionadoTipoPoblacion = 0;
  valorSeleccionadoPaisNacimiento = 0;
  valorSeleccionadoDepartamentoNacimiento = 0;
  valorSeleccionadoCiudadNacimiento = 0;

  valorSeleccionadoPaisResidencia = 0;
  valorSeleccionadoDepartamentoResidencia = 0;
  valorSeleccionadoCiudadResidencia = 0;

  //idPaisColombia = 4;

  // tipoDocumentos = [
  //   {
  //     id : 0,
  //     descripcion : "-- Seleccione --"
  //   },
  //   {
  //   id : 1,
  //   descripcion : "Cedula de Ciudadania"
  //   },
  //   {
  //     id : 2,
  //     descripcion : "Cedula de Extranjeria"
  //   },
  //   {
  //     id : 3,
  //     descripcion : "Tarjeta de identidad"
  //   },
  //
  //   ];


  // generos = [
  //   {
  //     id : 0,
  //     descripcion : "-- Seleccione --"
  //   },
  //   {
  //     id : 1,
  //     descripcion : "Masculino"
  //   },
  //   {
  //     id : 2,
  //     descripcion : "Femenino"
  //   }
  // ];

  // tiposPoblacion = [
  //   {
  //     id : 0,
  //     descripcion : "-- Seleccione --"
  //   },
  //   {
  //     id : 1,
  //     descripcion : "Indigena"
  //   },
  //   {
  //     id : 2,
  //     descripcion : "Afro-Colombiana"
  //   },
  // ];

  // paises = [
  //   {
  //     id : 0,
  //     nombre : "-- Seleccione --"
  //   },
  //   {
  //     id : 1,
  //     nombre : 'Afganistán'
  //
  //   },
  //   {
  //     id : 2,
  //     nombre : 'Albania'
  //
  //   },
  //   {
  //     id : 3,
  //     nombre : 'Argentina'
  //   },
  //   {
  //     id : this.idPaisColombia,
  //     nombre : 'Colombia'
  //   },
  //   {
  //     id : 5,
  //     nombre : 'España'
  //   }
  // ];

  // departamentos = [
  //   {
  //     id : 0,
  //     descripcion : "-- Seleccione --"
  //   },
  //   {
  //     id: 1,
  //     idPais: this.idPaisColombia,
  //     descripcion : "Antioquia"
  //   },
  //   {
  //     id: 2,
  //     idPais: this.idPaisColombia,
  //     descripcion : "Bolivar"
  //   },
  //   {
  //     id: 3,
  //     idPais: this.idPaisColombia,
  //     descripcion : "Cauca"
  //   },
  //   {
  //     id: 4,
  //     idPais: this.idPaisColombia,
  //     descripcion : "Cundinamarca"
  //   },
  // ];
  //
  // municipios = [
  //   {
  //     id : 0,
  //     descripcion : "-- Seleccione --"
  //   },
  //   {
  //     id : 1,
  //     idEstado : 1,
  //     descripcion : "Medellin"
  //   },
  //   {
  //     id : 2,
  //     idEstado : 2,
  //     descripcion : "Cartagena"
  //   },
  //   {
  //     id : 3,
  //     idEstado : 3,
  //     descripcion : "Popayán"
  //   },
  //   {
  //     id : 4,
  //     idEstado : 4,
  //     descripcion : "Bogota"
  //   }
  //
  // ];

  // validarNumeroDocumento()
  // {
  //   return this.numeroDocumento.valid || this.numeroDocumento.untouched;
  // }

  // ngOnInit() {
  //   this.numeroDocumento = new FormControl('', Validators.required);
  //   this.nombres = new FormControl('', Validators.required);
  //   this.apellidos = new FormControl('', Validators.required);
  //
  //   this.formSolicitante = new FormGroup({
  //     numeroDocumento : this.numeroDocumento,
  //     nombres : this.nombres,
  //     apellidos : this.apellidos
  //   })
  // }

}

