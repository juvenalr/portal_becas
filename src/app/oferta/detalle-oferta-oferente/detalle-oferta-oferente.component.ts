/**
 * Created by edgaguil on 21/10/2017.
 */
import {Component} from "@angular/core";
import {IOferta, IOfertaConsulta} from "../../models/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioOferta} from "../../services/oferta.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-detalle-oferta-oferente',
  templateUrl: './detalle-oferta-oferente.component.html',
  styles: []
})


export class DetalleOfertaOferenteComponent {

  //detalleOferta: IOferta;
  detalleOferta: IOfertaConsulta;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private servicioOferta: ServicioOferta, private servicioAutenticacion : AutenticacionService) {
  }

  /***Metodo de Inicialización del componente */
  ngOnInit() {
    this.servicioAutenticacion.validarAutorizacion('oferta/consulta-oferta-oferente');
    let idOferta: string;
    idOferta = this.activatedRouter.snapshot.paramMap.get('id');
    //this.detalleOferta = this.servicioOferta.consultarOferta(idOferta);
    this.servicioOferta.consultarOferta(idOferta).subscribe(detalleOferta => {
      this.detalleOferta = detalleOferta;
      console.log(detalleOferta);
    });
  }

  eliminarOferta() {

  }

  consultarEtapasOferta(idOferta) {
    this.router.navigate(['/oferta/etapas-oferta-oferente', idOferta]);
  }
}
