/**
 * Created by edgaguil on 17/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOfertaConsulta} from "../../models/oferta.model";
import {Router} from "@angular/router";
import {TipoCriterioBusquedaOferta} from "../../enums/criterio.busqueda.oferta.enum";
import {AutenticacionService} from "../../services/autenticacion.service";


@Component({
  selector: 'app-consulta-oferta-oferente',
  templateUrl: './consulta-oferta-oferente.component.html',
  styles: []
})


export class ConsultarOfertaOferenteComponent implements OnInit {

  /** Declaraciones */
  valorSeleccionadoCriterioBusqueda : number;
  //ofertas : IOferta[];
  ofertas : IOfertaConsulta[];

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private servicioAutenticacion : AutenticacionService, private router : Router, private servicioOferta : ServicioOferta){
  }

  /***Metodo de Inicialización del componente */
  ngOnInit(){
    this.servicioAutenticacion.validarAutorizacion('oferta/consulta-oferta-oferente');
    this.valorSeleccionadoCriterioBusqueda = 0;
    let idOferente = this.servicioAutenticacion.obtenerCookie('idUsuario');
    console.log("idOferente");
    console.log(idOferente);

    let perfil = this.servicioAutenticacion.obtenerCookie('perfil');
    let token = this.servicioAutenticacion.obtenerCookie('token');

    console.log("perfil");
    console.log(perfil);

    console.log("token");
    console.log(token);
  }


  /** Consulta de las ofertas*/
  consultarOfertas(filtroBusqueda){
    console.log(filtroBusqueda);
    //this.ofertas = this.servicioOferta.consultarOfertas(filtroBusqueda.codigoConvocatoria);
    filtroBusqueda.codigoConvocatoria = filtroBusqueda.tipoCriterioBusquedaOferta == TipoCriterioBusquedaOferta.todas ?  0 : filtroBusqueda.codigoConvocatoria;

    this.servicioOferta.consultarOfertasOferente(filtroBusqueda.codigoConvocatoria).subscribe(ofertas => {
      this.ofertas = ofertas;
      console.log(ofertas);
    });

    console.log(this.ofertas);

  }

  /** Consulta el detalle de la oferta */
  consultarDetalleOferta(idOferta){
    this.router.navigate(['/oferta/detalle-oferta-oferente', idOferta ]);
  }
}

