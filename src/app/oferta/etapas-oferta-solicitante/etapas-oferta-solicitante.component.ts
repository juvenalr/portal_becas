/**
 * Created by edgaguil on 20/10/2017.
 */
import {Component, OnInit} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-etapas-oferta-solicitante',
  templateUrl: './etapas-oferta-solicitante.component.html',
  styles: []
})

export class EtapasOfertaSolicitanteComponet implements OnInit {

  //etapasOferta : IEtapa[];
  etapasOferta : IEtapaConsulta[];
  idOferta : string;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router, private servicioEtapasOferta : ServicioEtapasOferta, private autenticacionService : AutenticacionService){
  }


  ngOnInit(){
    //let idOferta : string;
    this.autenticacionService.validarAutorizacion('oferta/consulta-oferta');
    this.idOferta = this.activatedRouter.snapshot.paramMap.get('idOferta');
    console.log(this.idOferta);
    //this.etapasOferta = this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta);
    this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta).subscribe(etapas =>{
      this.etapasOferta = etapas;
      console.log(etapas)
    });

    console.log(this.etapasOferta);
  }
}

