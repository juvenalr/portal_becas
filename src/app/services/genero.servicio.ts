/**
 * Created by edgaguil on 13/08/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
import {IGenero} from "../models/genero.model";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export  class ServicioGenero
{
  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {}

  obtenerGeneros(): Observable<IGenero[]> {
    return this.http.get(this.configuracion.baseUrl +  "general/genres/").map((response : Response) => {
      return <IGenero[]> response.json();
    }).catch(this.manejadorError);
  };

  private manejadorError(error : Response)
  {
    return Observable.throw(error.statusText);
  }


  /*
  obtenerGeneros() : any[] {
    const generos = [
      {
        id : 0,
        descripcion : "-- Seleccione --"
      },
      {
        id : 1,
        descripcion : "Masculino"
      },
      {
        id : 2,
        descripcion : "Femenino"
      }
    ];

    return generos;
  }
  */
}

