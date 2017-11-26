import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServicioOferente} from "../../services/oferente.servicio";
import {IRegistroOferente} from "../../models/registro.oferente.model";
import {ServicioPais} from "../../services/pais.servicio";
import {ServicioTipoEntidad} from "../../services/tipo.entidad.servicio";
import {IPais} from "../../models/pais.model";
import {ITipoEntidad} from "../../models/tipo.entidad.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-oferente',
  templateUrl: './formulario-oferente.component.html',
  styles: []
})
export class FormularioOferenteComponent implements OnInit {

  paises : IPais[];
  tipoEntidades : ITipoEntidad[];
  valorSeleecionadoPais;
  valorSeleccionadoTipoEntidad;
  administradorForm: FormGroup;
  contrasena: FormControl
  confirmarcontrasena: FormControl;

  constructor(public formBuilder: FormBuilder, private router : Router , private servicioOferente : ServicioOferente, private servicioPais : ServicioPais, private servicioTipoEntidad : ServicioTipoEntidad ) {
    this.administradorForm = formBuilder.group({
      'contrasena': new FormControl('', Validators.required),
      'confirmarcontrasena': new FormControl('', Validators.required)
    }, {
      validator: this.confirmarContrasenia.bind(this)
    });
  }

  ngOnInit() {
    //this.paises = this.servicioPais.obtenerPaises();
    //this.tipoEntidades = this.servicioTipoEntidad.obtenerTiposEntidad();

    this.servicioPais.obtenerPaises().subscribe(paises => this.paises = paises);
    this.servicioTipoEntidad.obtenerTiposEntidad().subscribe(tipoEntidades => this.tipoEntidades = tipoEntidades);
    console.log(this.paises);

    this.valorSeleecionadoPais = "0";
    this.valorSeleccionadoTipoEntidad = "0";
    this.contrasena = new FormControl('', [Validators.required]);
    this.confirmarcontrasena = new FormControl('', [Validators.required]);
  }


  crearOferente(formValues){
    console.log(formValues);
    let datosOferente : IRegistroOferente;
    datosOferente = formValues;
    datosOferente.contrasena = this.administradorForm.controls.contrasena.value;
    datosOferente.username = formValues.login;
    console.log("Oferente");
    console.log(datosOferente);
    this.servicioOferente.crearOferente(datosOferente)
    //.finally(() => this.router.navigate(['/oferente/confirmacion-creacion-oferente'])).subscribe();
    .subscribe(event => { this.router.navigate(['/oferente/confirmacion-creacion-oferente']) })
  }

  //#region Validaciones
  validarContrasenia() {
    return this.administradorForm.controls.contrasena.valid ||
      this.administradorForm.controls.contrasena.untouched
  }
  validarConfirmacionContrasenia() {
    return (this.administradorForm.controls.confirmarcontrasena.valid)
      || this.administradorForm.controls.confirmarcontrasena.untouched;
  }
  validarMismaContrasenia() {
    return (this.administradorForm.valid && this.administradorForm.controls.confirmarcontrasena.valid)
      || this.administradorForm.controls.confirmarcontrasena.untouched;
  }
  private confirmarContrasenia(group: FormGroup): { [key: string]: any } {
    let contrasenia = group.controls.contrasena.value
    let confirmarcontrasenia = group.controls.confirmarcontrasena.value
    return contrasenia === confirmarcontrasenia
      ? null
      : { 'confirmarContrasenia': 'La contraseña no coincide' }
  }
  //#endregion  Validaciones


}
