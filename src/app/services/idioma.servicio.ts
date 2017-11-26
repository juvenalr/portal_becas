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
/**
 * Created by edgaguil on 26/10/2017.
 */


@Injectable()
export class ServicioIdioma extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, servicioAutenticacion: AutenticacionService) {
    super(servicioAutenticacion);
  }

  obtenerIdiomas(): Observable<IIdioma[]> {
    return this.http.get(this.configuracion.baseUrl + RutaRelativaOperacionServicio.idiomas).map((response: Response) => {
      return <IIdioma[]> response.json();
    }).catch(this.manejadorError);
  };
}


