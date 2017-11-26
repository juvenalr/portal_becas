/**
 * Created by edgaguil on 21/10/2017.
 */
import {Component, Input, OnInit, Output} from "@angular/core";
import {IEtapa} from "../../models/etapa.model";

@Component({
  selector: 'app-modal-etapa-oferta',
  templateUrl: './modal-etapa-oferta.component.html',
  styles: []
})

export class  ModalEtapaOfertaComponent implements OnInit{

  titulo : string;

  etapa : IEtapa;

  //@Output() experienciaLaboralAgregada : EventEmitter<IExperienciaLaboral> = new EventEmitter<IExperienciaLaboral>();


  /***Metodo de Inicialización del componente */
  ngOnInit(){
    this.titulo = this.etapa != null ? 'Agregar Etapa' : '';
  }

}
