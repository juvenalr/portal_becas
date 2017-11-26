/**
 * Created by edgaguil on 22/10/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ITipoItem} from "../../models/tipo.item.model";
import {DefincionItemFormulario} from "../../models/definicion.item.formulario.model";
import {IItemFormulario, IItemFormularioConsulta, Item, ItemFormulario} from "../../models/item.model";
import {Respuesta} from "../../models/respuesta.model";
import {ServicioTipoItemFormulario} from "../../services/tipo.item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IFormularioConsulta, IFormultario} from "../../models/formulario.model";
import {ServicioFormularioEtapa} from "../../services/formulario.etapa.servicio";
import {isNullOrUndefined} from "util";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-formulario-etapa',
  templateUrl: './formulario-etapa.component.html',
  styles: []
})

export class FormularioEtapaComponent implements OnInit {

  idOferta : number;
  idFormulario : number;
  idEtapaOferta : number;

  datosFormulario : IFormularioConsulta;
  datosItemsFormulario : IItemFormularioConsulta[];

  definicionItemFormulario : DefincionItemFormulario;
  listaItems : IItemFormulario[];
  numeroItems : number;
  listaTiposItem : ITipoItem[];
  titulo : string;

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



  constructor(private router : Router, private activatedRouter : ActivatedRoute, private servicioTipoItems : ServicioTipoItemFormulario, private servicioFormularioEtapa : ServicioFormularioEtapa, private servicioAutenticacion : AutenticacionService) {
  }

  ngOnInit() {

    this.servicioAutenticacion.validarAutorizacion('oferta/consulta-oferta-oferente');
    this.datosFormulario = {
      id : 0,
      idEtapa : 0,
      nombre : '',
      descripcion : ''
    };

    this.datosItemsFormulario = [];

    this.idFormulario = Number(this.activatedRouter.snapshot.paramMap.get('idFormulario'));
    this.idEtapaOferta = Number(this.activatedRouter.snapshot.paramMap.get('idEtapa'));
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    this.datosFormulario.idEtapa = this.idEtapaOferta;

    if(this.idFormulario == 0)
    {
      this.titulo = "Crear Formulario"
      this.numeroItems = 0;
      this.listaItems =  [];

    }
    else{
      this.titulo = "Editar Formulario";
      this.servicioFormularioEtapa.obtenerFormulario(this.idFormulario).subscribe(datosFormulario => {
        this.datosFormulario = datosFormulario;
        console.log(datosFormulario);
      });


      //this.servicioFormularioEtapa.obtenerItemsFormulario(this.idFormulario).subscribe(datosItemsFormulario => this.datosItemsFormulario = datosItemsFormulario);

      this.servicioFormularioEtapa.obtenerItemsFormulario(this.idFormulario).subscribe(datosItemsFormulario => {
        this.listaItems =  [];
        for (let itemFormulario of datosItemsFormulario) {
          let item: ItemFormulario = new ItemFormulario();
          item.descripcion = itemFormulario.descripcion;
          item.id_tipo_item = itemFormulario.tipoItem.id;
          item.obligatorio = itemFormulario.obligatorio;
          item.tamanio = itemFormulario.tamanio;
          item.valores_posibles = itemFormulario.valoresPosibles;
          this.listaItems.push(item);
        }
        console.log(this.listaItems);

      });
    }

    this.definicionItemFormulario = new DefincionItemFormulario();
    this.definicionItemFormulario.tipoControl = "0";
    this.servicioTipoItems.obtenerTiposItem().subscribe(tiposItem => this.listaTiposItem = tiposItem);

    console.log(this.tiposItemEnum.archivo);
  }

  agregarItem(definicionItemFormulario)
  {
    this.numeroItems = this.numeroItems + 1;
    console.log(definicionItemFormulario);

    let item: ItemFormulario = new ItemFormulario();

    let opciones : string =  definicionItemFormulario.opciones ? definicionItemFormulario.opciones.trim() : '';
    let tipoDelimitador : string = definicionItemFormulario.tipoDelimitador;

    item.descripcion = definicionItemFormulario.nombreItem;
    item.id_tipo_item = parseInt(definicionItemFormulario.tipoControl);
    item.obligatorio = isNullOrUndefined(definicionItemFormulario.requerido) ? false : definicionItemFormulario.requerido;
    item.tamanio = definicionItemFormulario.tamanoMaximo;

    if(opciones.length > 0){
      let respuestas : string[];
      console.log(opciones);
      respuestas = opciones.split(tipoDelimitador);
      console.log(respuestas);
      item.valores_posibles = respuestas;
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

      this.listaItems = [];
    }
  }

  removerItemLista(e, indiceItem){
    e.preventDefault();
    if(indiceItem > -1){
      this.listaItems.splice(indiceItem, 1);
    }
  }

  actualizarFormulario(){
    console.log("this.listaItems");
    console.log(this.listaItems);
    console.log("this.datosFormulario");
    console.log(this.datosFormulario);
    let formularioEditado : IFormultario;

    formularioEditado = {
      id_etapa : this.datosFormulario.idEtapa,
      nombre : this.datosFormulario.nombre,
      descripcion : this.datosFormulario.descripcion,
      items : this.listaItems
    };

    this.servicioFormularioEtapa.actuaizarFormularioEtapa(this.datosFormulario.id,  formularioEditado).subscribe(formularioCreado => {
      if(formularioCreado.id != 0){
        alert('El formulario ha sido actualizado correctamente');
      }
    });

  }

  crearFormulario(){
    console.log(this.listaItems);
    console.log(this.datosFormulario);
    let nuevoFormulario : IFormultario;
    let formularioCreado : IFormularioConsulta;

    nuevoFormulario = {
      id_etapa : this.datosFormulario.idEtapa,
      nombre : this.datosFormulario.nombre,
      descripcion : this.datosFormulario.descripcion,
      items : this.listaItems
    };

    this.servicioFormularioEtapa.registrarFormularioEtapa(nuevoFormulario).subscribe(formularioCreado => {
        if(formularioCreado.id != 0){
          alert('El formulario ha sido registrado correctamente');
          this.router.navigate(['/oferta/editar-etapa-oferta/', this.idOferta, this.datosFormulario.idEtapa]);
          //oferta/editar-etapa-oferta/3/29
        }
    });
  }
}
