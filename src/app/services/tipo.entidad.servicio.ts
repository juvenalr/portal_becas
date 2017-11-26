import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
import {ITipoEntidad} from "../models/tipo.entidad.model";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export  class ServicioTipoEntidad
{
  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {}

  obtenerTiposEntidad(): Observable<ITipoEntidad[]> {
    return this.http.get(this.configuracion.baseUrl +  "general/companytypes/").map((response : Response) => {
      return <ITipoEntidad[]> response.json();
    }).catch(this.manejadorError);
  };

  private manejadorError(error : Response)
  {
    return Observable.throw(error.statusText);
  }

  /*obtenerTiposEntidad() : any[] {
    const tipoEntidades = [
      {
        id : 0,
        nombre : "-- Seleccione --"
      },
      {
        id : 1,
        nombre : "Fundación"
      }
    ];
    return tipoEntidades;
  }
  */
}
