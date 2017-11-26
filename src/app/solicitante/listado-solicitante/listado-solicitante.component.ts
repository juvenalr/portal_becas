import { Component, OnInit } from '@angular/core';
import {SolicitanteService} from "../../services/solicitante.service";
import {ISolicitante} from "../../models/solicitante.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-listado-solicitante',
  templateUrl: './listado-solicitante.component.html',
  styles: []
})
export class ListadoSolicitanteComponent implements OnInit {
  //solicitantes : ISolicitante[];
  solicitantes : any;

  constructor(private solicitateService : SolicitanteService  ) { }

  ngOnInit() {
    //this.solicitantes  = this.solicitateServic.obtenerListadoSolicitantes();
    this.solicitateService.obtenerSolicitantes().subscribe(solicitantes =>  this.solicitantes = solicitantes );
    //console.log(this.solicitantes);
  }

}
