/**
 * Created by edgaguil on 26/10/2017.
 */
import {Injectable} from "@angular/core";
import {ServicioBase} from "./base.servicio";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {Observable} from "rxjs/Observable";
import {RutaRelativaOperacionServicio} from "../constantes/rutaRelativaOperacionServicio";
import {IIdioma} from "../models/idioma.model";
import {INivelIdioma} from "../models/nivel.idioma.model";
/**
 * Created by edgaguil on 26/10/2017.
 */


@Injectable()
export class ServicioNivelIdioma extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, servicioAutenticacion: AutenticacionService) {
    super(servicioAutenticacion);
  }

  obtenerNivelesIdioma(): Observable<INivelIdioma[]> {
    return this.http.get(this.configuracion.baseUrl + RutaRelativaOperacionServicio.nivelIdioma).map((response: Response) => {
      return <INivelIdioma[]> response.json();
    }).catch(this.manejadorError);
  };
}
