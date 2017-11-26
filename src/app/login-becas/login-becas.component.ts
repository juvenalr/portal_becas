import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service'
import { Router } from '@angular/router'
import { CookieService } from "angular2-cookie/core";
import { Injectable, EventEmitter } from "@angular/core";
import { GlobalEventsManager } from "../GlobalEventsManager";
import { IUsuarioS, UsuarioS } from '../models/usuarios.model'
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfiguracionServicio } from "../services/configuracion.servicio";


@Component({
  selector: 'app-login-becas',
  templateUrl: './login-becas.component.html',
  styles: []
})

@Injectable()
export class LoginBecasComponent implements OnInit {

  usuario: IUsuarioS
  mensajeError: string
  status:string ='200'
  error:string;

  constructor(private autenticacionService: AutenticacionService, private router: Router
    , private http: Http, private configuracion: ConfiguracionServicio) {
    this.usuario = new UsuarioS();
  }

  onkeypress()
  {

    this.status = '200';
  }


  login(formValues) {
    this.iniciarSesion(formValues.login,formValues.password);

  }

  iniciarSesion(login: string, password: string) {
    let headers= new Headers({'username' : login,'password':password});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'login', "", options).map((response : Response) => {
      return response
    }).subscribe(res=>this.asignarSesion(res.json(),res.status),error=>this.manejadorError(error));
  }

  asignarSesion(sesion:JSON,status:number)
  {
    console.log(sesion);
    console.log('perfil:' + sesion['rol']);
    console.log('token:' + sesion['token']);
    console.log('idUsuario:' + sesion['idUsuario']);

    let respuesta=sesion;

    this.autenticacionService.crearCookie('perfil',sesion['rol']);
    this.autenticacionService.crearCookie('token',sesion['token']);
    this.autenticacionService.crearCookie('idUsuario',sesion['idUsuario']);
    this.autenticacionService.crearCookie('status',status.toString());

    this.router.navigate(['']);
    window.location.reload();

  }

  manejadorError(err : any)
  { let error= JSON.parse(err._body);
    this.autenticacionService.crearCookie('status',err.status);
    this.autenticacionService.crearCookie('error',error['error']);
    this.status = this.autenticacionService.obtenerCookie('status')
    this.error=this.autenticacionService.obtenerCookie('error');
    console.log("error:" +this.autenticacionService.obtenerCookie('error'));

  }

  ngOnInit() {
  }
}
