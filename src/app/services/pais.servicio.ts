import {Injectable} from "@angular/core";
import {IPais} from "../models/pais.model";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
/**
 * Created by edgaguil on 9/08/2017.
 */


@Injectable()
export class ServicioPais{

  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {}

  obtenerPaises(): Observable<IPais[]> {
    return this.http.get(this.configuracion.baseUrl +  "general/countries/").map((response : Response) => {
      return <IPais[]> response.json();
    }).catch(this.manejadorError);
  };

  private manejadorError(error : Response)
  {
    return Observable.throw(error.statusText);
  }

/*
  obtenerPaises() : any[]{

    const idPaisColombia  = 4;

    const paises = [
      {
        id : 0,
        nombre : "-- Seleccione --"
      },
      {
        id : 1,
        nombre : 'Afganistán'

      },
      {
        id : 2,
        nombre : 'Albania'

      },
      {
        id : 3,
        nombre : 'Argentina'
      },
      {
        id : idPaisColombia,
        nombre : 'Colombia'
      },
      {
        id : 5,
        nombre : 'España'
      },
      {
        id : 6,
        nombre : 'Costa Rica'
      }
    ];

    return paises;
  }
  */
}
