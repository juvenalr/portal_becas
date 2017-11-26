/**
 * Created by edgaguil on 13/08/2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {ITipoDocumento} from "../models/tipo.documento.model";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export  class ServicioTipoDocumento
{
  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {}

  obtenerTipoDocumentos(): Observable<ITipoDocumento[]> {
    return this.http.get(this.configuracion.baseUrl +  "general/documentstype/").map((response : Response) => {
      return <ITipoDocumento[]> response.json();
    }).catch(this.manejadorError);
  };

  private manejadorError(error : Response)
  {
    return Observable.throw(error.statusText);
  }

  /*
  obtenerTipoDocumentos() : any[] {
    const tipoDocumentos = [
      {
        id : 0,
        descripcion : "-- Seleccione --"
      },
      {
        id : 1,
        descripcion : "Cedula de Ciudadania"
      },
      {
        id : 2,
        descripcion : "Cedula de Extranjeria"
      },
      {
        id : 3,
        descripcion : "Tarjeta de identidad"
      },

    ];

    return tipoDocumentos;
  }*/



}
