import { Component, OnInit } from '@angular/core';
import {DefincionItemFormulario, IDefincionItemFormulario} from "../../models/definicion.item.formulario.model";
import {Item} from "../../models/item.model";
import {Respuesta} from "../../models/respuesta.model";
import {forEach} from "@angular/router/src/utils/collection";
import {ITipoItem} from "../../models/tipo.item.model";
import {ServicioTipoItemFormulario} from "../../services/tipo.item.service";

@Component({
  selector: 'app-crear-formulario',
  templateUrl: './crear-formulario.component.html',
  styles: []
})

export class CrearFormularioComponent implements OnInit {

  definicionItemFormulario : DefincionItemFormulario;
  listaItems;
  numeroItems : number;
  listaTiposItem : ITipoItem[];

  tiposItemEnum  = {
  textoEntrada :  1, //'INPUT_TEXT',
  entradaNumerica : 2, // 'INPUT_NUMBER',
  fecha : 3, //'INPUT_DATE',
  listaSeleccionable : 4, //'INPUT_SELECT',
  listaSeleccionMultiple : 5, //'INPUT_MULTISELECT',
  archivo :  6, //'INPUT_FILE'
  etiqueta : 7,  //TITULO,
  titulo : 8,  //TITULO,
  listaRadioButton : 9
  }


  constructor(private servicioTipoItems : ServicioTipoItemFormulario) { }

  ngOnInit() {
    this.numeroItems = 0;
    this.listaItems =  [];
    this.definicionItemFormulario = new DefincionItemFormulario();
    this.definicionItemFormulario.tipoControl = "0";
    this.servicioTipoItems.obtenerTiposItem().subscribe(tiposItem => this.listaTiposItem = tiposItem);

    console.log(this.tiposItemEnum.archivo);
  }

  crearFormulario(formValues)
  {

  }

  agregarItem(definicionItemFormulario)
  {
    this.numeroItems = this.numeroItems + 1;
    console.log(definicionItemFormulario);
    let listaItems : Item = new Item();
    let item : Item = new Item();

    let opciones : string =  definicionItemFormulario.opciones ? definicionItemFormulario.opciones.trim() : '';
    let tipoDelimitador : string = definicionItemFormulario.tipoDelimitador;

    item.descripcion = definicionItemFormulario.nombreItem;
    item.idTipoControl = parseInt(definicionItemFormulario.tipoControl);
    item.requerido = definicionItemFormulario.requerido;
    item.tamanoMaximo = definicionItemFormulario.tamanoMaximo;

    if(opciones.length > 0){
      let listaRespuestas : Respuesta[];
      listaRespuestas = [];
      let respuestas : string[];
      respuestas = opciones.split(tipoDelimitador);

      for(let respuesta of respuestas)
      {
        let itemRespuesta : Respuesta = new Respuesta();
        itemRespuesta.respuesta = respuesta;
        listaRespuestas.push(itemRespuesta);
      }

      item.listaRespuestas = listaRespuestas;
    }

    this.listaItems.push(item);
    console.log(this.listaItems);
  }

  borrarFormulario() : void
  {
    if(this.definicionItemFormulario != undefined) {
      this.definicionItemFormulario.tipoControl = "0";
      this.definicionItemFormulario.tamanoMaximo = null;
      this.definicionItemFormulario.requerido = false;
      this.definicionItemFormulario.tipoDelimitador = "";
      this.definicionItemFormulario.nombreItem = "";
      this.definicionItemFormulario.opciones = "";
    }
  }
}

