import {Injectable} from "@angular/core";
import {ServicioBase} from "./base.servicio";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {Observable} from "rxjs/Observable";
import {IInstitucionEducacionBasica} from "../models/institucion.educacion.basica.model";
import {RutaRelativaOperacionServicio} from "../constantes/rutaRelativaOperacionServicio";
/**
 * Created by edgaguil on 26/10/2017.
 */


@Injectable()
export class ServicioInstitucionEducacionBasica extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, servicioAutenticacion: AutenticacionService) {
    super(servicioAutenticacion);
  }

  obtenerInstitucionesEducacionBasica(): Observable<IInstitucionEducacionBasica[]> {
    return this.http.get(this.configuracion.baseUrl + RutaRelativaOperacionServicio.institucionEducacionBasica).map((response: Response) => {
      return <IInstitucionEducacionBasica[]> response.json();
    }).catch(this.manejadorError);
  };
}


