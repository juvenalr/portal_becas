/**
 * Created by edgaguil on 18/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOferta, IOfertaConsulta} from "../../models/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-detalle-oferta-solicitante',
  templateUrl: './detalle-oferta-solicitante.component.html',
  styles: []
})

export class DetalleOfertaSolicitanteComponent implements OnInit {

  //detalleOferta : IOferta;
  detalleOferta: IOfertaConsulta;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private servicioOferta: ServicioOferta, private autenticacionService : AutenticacionService) {
  }

  /***Metodo de Inicialización del componente */
  ngOnInit() {
    this.autenticacionService.validarAutorizacion('oferta/consulta-oferta');
    let idOferta: string;
    idOferta = this.activatedRouter.snapshot.paramMap.get('id');
    //this.detalleOferta = this.servicioOferta.consultarOferta(idOferta);
    this.servicioOferta.consultarOferta(idOferta).subscribe(detalleOferta => {
      this.detalleOferta = detalleOferta;
      console.log(detalleOferta);
    });

    console.log(this.detalleOferta);
  }

  aplicarOferta() {

  }

  consultarEtapasOferta(idOferta) {
    this.router.navigate(['/oferta/etapas-oferta-solicitante', idOferta]);
  }

}
