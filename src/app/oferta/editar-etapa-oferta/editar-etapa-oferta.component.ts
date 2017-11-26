import {Component, Inject, OnInit} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";
import {JQ_TOKEN} from "../../comun/jquery.service";
import {IFormularioConsulta} from "../../models/formulario.model";
import {ServicioFormularioEtapa} from "../../services/formulario.etapa.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";
/**
 * Created by edgaguil on 21/10/2017.
 */



@Component({
  selector: 'app-editar-etapa-oferta',
  templateUrl: './editar-etapa-oferta.component.html',
  styles: []
})

//declare var $: any;

export class EditarEtapaOfertaComponent implements OnInit {
  //etapaOferta : IEtapa;
  etapaOferta : IEtapaConsulta;
  idOferta : number;
  formulariosEtapa : IFormularioConsulta[];
  idEtapaOferta : number;


  datosEtapaDisponibles : boolean = false;
  datosFormulariosDisponibles : boolean = false;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private servicioAutenticacion : AutenticacionService, private router : Router,  private servicioEtapasOferta : ServicioEtapasOferta, private servicioFormularioEtapa : ServicioFormularioEtapa,  @Inject(JQ_TOKEN) private $ : any){
    this.$('#msgActualizacionEtapa').on("close.bs.alert", function(){ this.$('#msgActualizacionEtapa').hide(); return false; } );
  }

  ngOnInit(){
    this.servicioAutenticacion.validarAutorizacion('oferta/consulta-oferta-oferente');
    this.idEtapaOferta = Number(this.activatedRouter.snapshot.paramMap.get('idEtapa'));
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    //this.etapaOferta = this.servicioEtapasOferta.obtenerEtapaOferta(idEtapaOferta);

    this.servicioEtapasOferta.obtenerEtapaOferta(this.idEtapaOferta).subscribe(etapaOferta =>  {
      this.etapaOferta = etapaOferta;
      console.log(etapaOferta);
      this.datosEtapaDisponibles = true;
    });

    this.cargarFormulariosEtapa(this.idEtapaOferta);

    this.$('#msgActualizacionEtapa').on("close.bs.alert", function(){ return false; } );
  }


  cargarFormulariosEtapa(idEtapaOferta){
    this.servicioFormularioEtapa.obtenerFormulariosEtapa(idEtapaOferta).subscribe(formulariosEtapa =>{
      this.formulariosEtapa = formulariosEtapa;
      this.datosFormulariosDisponibles = true;
      console.log(formulariosEtapa);
    });
  }

  ocultarMensaje(){
    console.log('adasdasda');
    this.$('#msgActualizacionEtapa').hide();
    return false;
  }

  actualizarEtapaOferta(){
    //console.log(datosEtapaOferta);
    console.log(this.etapaOferta);
    let datosEtapa : IEtapa;
    datosEtapa = {
      id_convocatoria : this.idOferta,
      nombre : this.etapaOferta.nombre,
      descripcion : this.etapaOferta.descripcion,
      fecha_inicio : this.etapaOferta.fechaInicio,
      fecha_fin : this.etapaOferta.fechaFin,
      cantidad_a_seleccionar : this.etapaOferta.cantidadASeleccionar
    };
    this.servicioEtapasOferta.actualizarEtapaOferta(this.etapaOferta.id, datosEtapa).subscribe(event => {
      alert('La etapa se ha actualizado exitosamente');
      this.router.navigate(['/oferta/etapas-oferta-oferente/', this.idOferta]);
    });

    //this.$('#msgActualizacionEtapa').show();
  }

  eliminarFormulario(e, idFormulario, idEtapaOferta){
    console.log("eliminarFormulario");
    console.log(idFormulario);
    console.log(idEtapaOferta);
    e.preventDefault();

    if(confirm('Esta seguro de que desea eliminar el formulario?')){
      console.log("Eliminar Formulario:" + idFormulario);
      this.servicioFormularioEtapa.eliminarFormularioEtapa(idFormulario).subscribe(formularioEliminadoCorrectamente => {
        if(formularioEliminadoCorrectamente){
          this.cargarFormulariosEtapa(idEtapaOferta);
        }
      });
    }
  }

  agregarFormulario(e){
    e.preventDefault();
    //this.router.navigate(['/oferta/formulario-etapa/' + this.idEtapaOferta + '/0']);
    this.router.navigate(['/oferta/formulario-etapa' , this.idOferta, this.idEtapaOferta, 0]);
  }

  editarFormulario(e, idFormulario){
    e.preventDefault();
    //this.router.navigate(['/oferta/formulario-etapa/' + this.idEtapaOferta + '/' + idFormulario]);
    this.router.navigate(['/oferta/formulario-etapa',  this.idOferta, this.idEtapaOferta, idFormulario]);
  }


}
