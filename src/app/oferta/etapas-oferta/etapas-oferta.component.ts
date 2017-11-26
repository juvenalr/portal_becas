/**
 * Created by edgaguil on 20/10/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../../models/etapa.model";

@Component({
  selector: 'app-etapas-oferta',
  templateUrl: './etapas-oferta.component.html',
  styles: []
})


export class EtapasOfertaComponent implements OnInit {
   //@Input() etapasOferta : IEtapa[];
  @Input() etapasOferta : IEtapaConsulta[];

  ngOnInit(){

  }
}
