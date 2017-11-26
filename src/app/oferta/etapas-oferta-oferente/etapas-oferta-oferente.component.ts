/**
 * Created by edgaguil on 21/10/2017.
 */

import {Component, Input} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";


@Component({
  selector: 'app-etapas-oferta-oferente',
  templateUrl: './etapas-oferta-oferente.component.html',
  styles: []
})

export class EtapasOfertaOferenteComponent{

  //etapasOferta : IEtapa[];
  etapasOferta : IEtapaConsulta[];
  idOferta : string;
  etapaEliminadaCorectamente : boolean = false;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router, private servicioEtapasOferta : ServicioEtapasOferta, private servicioAutenticacion : AutenticacionService){
  }

  ngOnInit(){
    this.servicioAutenticacion.validarAutorizacion('oferta/consulta-oferta-oferente');
    this.idOferta = this.activatedRouter.snapshot.paramMap.get('idOferta');
    console.log(this.idOferta);
    //this.etapasOferta = this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta);
    this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta).subscribe(etapas =>{
      this.etapasOferta = etapas;
      console.log(etapas)
    });
  }


  eliminarEtapa(e, idEtapa)
  {
    e.preventDefault();
    console.log(e);
    if(confirm('Esta seguro de que desea eliminar la etapa?')){
      console.log("Eliminar etapa:" + idEtapa);
      this.servicioEtapasOferta.eliminarEtapaOferta(idEtapa).subscribe(etapaEliminadaCorectamente => {
        this.etapaEliminadaCorectamente = etapaEliminadaCorectamente
        if(etapaEliminadaCorectamente){
          console.log('Etapa eliminada');
          this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta).subscribe(etapas =>{
            this.etapasOferta = etapas;
            console.log('Etapa eliminada - Consultado etapas');
            console.log(etapas)
          });
        }
      });
    }
  }
  editarEtapaOferta(e, idEtapa){
    e.preventDefault();
    console.log(idEtapa);
    this.router.navigate(['/oferta/editar-etapa-oferta',  this.idOferta, idEtapa]);
  }

  agregarEtapaOferta(){
    this.router.navigate(['/oferta/agregar-etapa-oferta',  this.idOferta]);
  }
}
