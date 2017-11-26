/**
 * Created by edgaguil on 17/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferente} from "../../services/oferente.servicio";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOferta, IOfertaConsulta} from "../../models/oferta.model";
import {Router} from "@angular/router";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-consultar-oferta',
  templateUrl: './consultar-oferta.component.html',
  styles: []
})


export class ConsultarOferta implements OnInit {
  /** Declaraciones */
  valorSeleccionadoCriterioBusqueda : number;
  //ofertas : IOferta[];
  ofertas : IOfertaConsulta[];
  perfil : string;


  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private router : Router, private servicioOferta : ServicioOferta, private servicioAutenticacion : AutenticacionService){
  }

  /***Metodo de Inicialización del componente */
  ngOnInit(){
    this.valorSeleccionadoCriterioBusqueda = 0;
    this.perfil = this.servicioAutenticacion.obtenerCookie('perfil');
  }

  /** Consulta de las ofertas*/
  consultarOfertas(filtroBusqueda){
    console.log(filtroBusqueda);
    //this.ofertas = this.servicioOferta.consultarOfertas(filtroBusqueda.codigoConvocatoria);

    this.servicioOferta.consultarOfertasSolicitante(filtroBusqueda.codigoConvocatoria).subscribe(ofertas => {
      this.ofertas = ofertas;
      console.log(ofertas);
    });

    console.log(this.ofertas);

  }

  /** Consulta el detalle de la oferta */
  consultarDetalleOferta(idOferta){
    //TODO: validar el role y direccionar adecuadamente

    //Redireccion a solicitante
    //this.router.navigate(['/oferta/detalle-oferta-solicitante', idOferta ])

    //Redireccion a oferente
    this.router.navigate(['/oferta/detalle-oferta-oferente', idOferta ])

  }
}
