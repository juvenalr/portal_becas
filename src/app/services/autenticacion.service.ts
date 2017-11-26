/**
 * Created by edgaguil on 28/07/2017.
 */
import { Injectable } from '@angular/core'
import { IUsuarioS, UsuarioS } from '../models/usuarios.model'
import { CookieService } from "angular2-cookie/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfiguracionServicio } from './configuracion.servicio';
import { Subject, Observable } from 'rxjs/Rx';
import { IMenu } from "../models/menu.model";
import { ServicioMenu } from "../services/menu.servicio";
import { Router } from "@angular/router";



@Injectable()
export class AutenticacionService {
  //usuarioActual: IUsuario
  usuario: UsuarioS
  menuAutorizado: IMenu[];

  constructor(private cookie: CookieService, private http: Http, private configuracion: ConfiguracionServicio
    , private servicioMenu: ServicioMenu, private router: Router) {
    this.usuario = new UsuarioS();
  }

  iniciarSesion(login: string, password: string): Observable<IUsuarioS> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'username': login, 'password': password });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.configuracion.baseUrl + 'login/', JSON.stringify(''), options).map((response: Response) => {
      return response.text() ? <IUsuarioS>response.json() : {}
    }).catch(this.manejadorError);
  }

  crearCookie(clave: string, valor: string) {
    this.cookie.put(clave, valor);
  }

  cerrarSesion() {
    this.cookie.remove('perfil');
    this.cookie.remove('token');
    this.cookie.remove('idUsuario');
  }

  obtenerCookie(clave: string): string {
    return this.cookie.get(clave);
  }

  borrarCookie(clave: string) {
    this.cookie.remove(clave);
  }

  validarAutorizacion(menu: string) {
    let perfil = this.obtenerCookie('perfil');
    this.menuAutorizado = this.servicioMenu.obtenerMenu(perfil);
    if (!this.menuAutorizado.some(s => s.ruta === menu)) {
      this.router.navigate(['login-becas']);
    }
  }

  private manejadorError(error: Response) {
    console.log(error);
    return Observable.throw(error.statusText);
  }

}


