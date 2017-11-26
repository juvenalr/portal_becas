import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {IInformacionNivelIdioma} from "../../models/informacion.nivel.idioma.model";
import {IIdioma} from "../../models/idioma.model";
import {INivelIdioma} from "../../models/nivel.idioma.model";
import {ServicioIdioma} from "../../services/idioma.servicio";
import {ServicioNivelIdioma} from "../../services/nivel.idioma.service";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;


@Component({
  selector: 'informacion-idioma-modal',
  templateUrl: './informacion-idioma.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class InformacionIdiomaComponent implements OnInit {
  informacionIdioma: IInformacionNivelIdioma;
  idiomas: IIdioma[] = [];
  nivelesIdioma: INivelIdioma[] = [];


  @Output() informacionIdiomaAgregada: EventEmitter<IInformacionNivelIdioma> = new EventEmitter<IInformacionNivelIdioma>();

  constructor(private servicioIdioma: ServicioIdioma, private servicioNivelIdioma : ServicioNivelIdioma) {
  }


  agregarInformacionAcademicaBasica(): void {

    console.log(this.informacionIdioma);

    this.informacionIdiomaAgregada.emit({
      id_idioma: this.informacionIdioma.id_idioma,
      id_nivel_idioma: this.informacionIdioma.id_nivel_idioma,
      idioma: this.idiomas.filter(x => x.id == this.informacionIdioma.id_idioma)[0],
      nivelIdioma: this.nivelesIdioma.filter(x => x.id == this.informacionIdioma.id_nivel_idioma)[0]
    });

    console.log(this.informacionIdiomaAgregada);

    this.informacionIdioma.id_nivel_idioma = null;
    this.informacionIdioma.id_idioma = null;
    this.informacionIdioma.nivelIdioma = null;
    this.informacionIdioma.idioma = null;

    $('#informacionIdioma').modal('toggle');
  }

  ngOnInit() {

    this.servicioIdioma.obtenerIdiomas().subscribe(idiomas  => this.idiomas = idiomas);
    this.servicioNivelIdioma.obtenerNivelesIdioma().subscribe(nivelesIdioma => this.nivelesIdioma = nivelesIdioma);

    this.informacionIdioma = {
      id_idioma : 0,
      id_nivel_idioma : 0,
      idioma : null,
      nivelIdioma : null
    };

  }
}


