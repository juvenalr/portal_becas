import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {IItem, Item} from "../../models/item.model";
import { CommonModule } from '@angular/common';
import {RequestOptions} from "@angular/http";
import {ValidadorPersonalizado} from "../../validadores-personalizados/validador.personalizado";

@Component({
  selector: 'app-gestionar-formulario',
  templateUrl: './gestionar-formulario.component.html',
  styles: []
})
export class GestionarFormularioComponent implements OnInit {

  listaItems : IItem[];
  formularioDinamico : FormGroup;
  datosFormulario: FormData;
  checkBoxListItemId : number = 7;


  constructor(private constructorFormulario : FormBuilder) { }

  ngOnInit() {

    this.datosFormulario = new FormData();

    this.listaItems = [{
      idTipoControl : 4,
      descripcion : 'Test 123456',
      requerido :  true,
      listaRespuestas : [],
      valor : 'valor',
      activo : true,
      tamanoMaximo : 5
    },
      {
        idTipoControl : 5,
        descripcion : 'Genero',
        requerido :  true,
        listaRespuestas : [ { respuesta : 'Masculino', seleccion : false}, { respuesta : 'Femenino', seleccion : false} ],
        valor : 'valor',
        activo : true,
        tamanoMaximo : null
      },
      {
        idTipoControl : 6,
        descripcion : 'Genero',
        requerido :  true,
        listaRespuestas : [ { respuesta : 'Masculino', seleccion : false}, { respuesta : 'Femenino', seleccion : false} ],
        valor : 'valor',
        activo : true,
        tamanoMaximo : null
      },
      {
        idTipoControl : 7,
        descripcion : 'Genero',
        requerido :  true,
        listaRespuestas : [ { respuesta : 'Masculino', seleccion : false}, { respuesta : 'Femenino', seleccion : false} ],
        valor : 'valor',
        activo : true,
        tamanoMaximo : null
      },
      {
        idTipoControl : 7,
        descripcion : 'Ppciones',
        requerido :  true,
        listaRespuestas : [ { respuesta : 'Opcion1', seleccion : false}, { respuesta : 'Opcion2', seleccion : false}, { respuesta : 'Opcion3', seleccion : false} ],
        valor : 'valor',
        activo : true,
        tamanoMaximo : null
      },
      {
        idTipoControl : 8,
        descripcion : 'Archivo',
        requerido :  true,
        listaRespuestas : null,
        valor : 'valor',
        activo : true,
        tamanoMaximo : null
      }
    ];

    //let i : number  = 0;

    let arregloControlesformulario = new FormArray([]);

    for(var i = 0; i <= this.listaItems.length - 1; i++)
    {
      let itemLista = this.listaItems[i];

      console.log(itemLista);

      if(itemLista.idTipoControl == this.checkBoxListItemId) {

        let arregloRespuestas = new FormArray([], ValidadorPersonalizado.checkBoxRequerido);

        for (var j = 0; j <= itemLista.listaRespuestas.length - 1; j++) {
          arregloRespuestas.push(new FormControl(false));
        }

        arregloControlesformulario.push(arregloRespuestas);

        /*
        let subgrupo: FormGroup = new FormGroup({});
        for (var j = 0; j <= itemLista.listaRespuestas.length - 1; j++) {
          subgrupo.addControl('control_' + i + '_opcion_' + j, new FormControl());
        }

        arregloControlesformulario.push(subgrupo);
        */

      }
      else{
        let control;

        let validadores : ValidatorFn[] = [];

        if(itemLista.requerido){
          validadores.push(Validators.required);
        }

        if(itemLista.tamanoMaximo != null && itemLista.tamanoMaximo > 0){
          validadores.push(Validators.maxLength(itemLista.tamanoMaximo));
        }
        control = new FormControl('', validadores);
        arregloControlesformulario.push(control);
      }

    }

    /*
    for(let itemLista of this.listaItems)
    {
      if(itemLista.idTipoControl == this.checkBoxListItemId)
      {
      }
      else
      {
        let control;

        let validadores : ValidatorFn[] = [];

        if(itemLista.requerido){
          validadores.push(Validators.required);
        }

        if(itemLista.tamanoMaximo != null && itemLista.tamanoMaximo > 0){
          validadores.push(Validators.maxLength(itemLista.tamanoMaximo));
        }
        control = new FormControl('', validadores);
        i = i +1;
        arregloControlesformulario.push(control);
      }
    }
    */

    //console.log(arregloControlesformulario.value);

    this.formularioDinamico = this.constructorFormulario.group({
      controlesDinamicos : arregloControlesformulario
    });

    // console.log('1');
    console.log(this.formularioDinamico);
    // console.log('2');
    console.log(JSON.stringify(this.formularioDinamico.value));

  }

  guardarFormulario(){
    console.log(this.formularioDinamico);
    console.log(JSON.stringify(this.formularioDinamico.value));
    console.log(this.listaItems);
    console.log(this.datosFormulario.get('3'));
  }

  archivoSeleccionado($event, controlName) {
    // console.log(controlName);
    // console.log((<FormArray>this.formularioDinamico.get('controlesDinamicos')).controls[controlName]);
    //(<FormArray>this.formularioDinamico.get('controlesDinamicos')).controls[controlName].setValue($event.target.files);
    console.log($event.target.files);
    //this.formularioDinamico.controls[controlName].setValue($event.target.files);
    //this.formularioDinamico.controls.controlesDinamicos.controls[controlName].setValue($event.target.files);

    let fileList: FileList = $event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.datosFormulario.append(controlName, file, file.name);
      console.log(this.datosFormulario);
      console.log(this.datosFormulario.get(controlName));
    }

      /** No need to include Content-Type in Angular 4 */
      //headers.append('Content-Type', 'multipart/form-data');
      //headers.append('Accept', 'application/json');
      //let options = new RequestOptions({ headers: headers });


      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //   .map(res => res.json())
      //   .catch(error => Observable.throw(error))
      //   .subscribe(
      //     data => console.log('success'),
      //     error => console.log(error)
      //   )
    //}
  }

}

