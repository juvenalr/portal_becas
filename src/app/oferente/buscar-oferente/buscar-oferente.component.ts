import { Component, OnInit } from '@angular/core';
import {ServicioOferente} from "../../services/oferente.servicio";
import {IOferente} from "../../models/oferente.model";

@Component({
  selector: 'app-buscar-oferente',
  templateUrl: './buscar-oferente.component.html',
  styles: []
})
export class BuscarOferenteComponent implements OnInit {

  oferente : IOferente;
  busquedaRealizada : boolean;

  constructor(private servicioOferente : ServicioOferente) { }

  ngOnInit() {
    this.busquedaRealizada = false;
  }

  buscarOferente(formValues)
  {
    //console.log(formValues);
    this.servicioOferente.obtenerOferente(parseInt(formValues.id)).subscribe(oferente =>  this.oferente = oferente );
    this.busquedaRealizada = true;
    //this.servicioOferente.obtenerOferente(parseInt(formValues.id)).subscribe(oferente => console.log(oferente));
  }




}
