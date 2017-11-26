/**
 * Created by edgaguil on 28/07/2017.
 */
import { Injectable } from '@angular/core'
import {ISolicitante} from "../models/solicitante.model";
import { Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
/**
 * Created by edgaguil on 28/07/2017.
 */


@Injectable()
export class SolicitanteService {

  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {}

  obtenerListadoSolicitantes()
  {
    return solicitantes;
  };

  obtenerSolicitantes(): Observable<ISolicitante[]> {
    return this.http.get(this.configuracion.baseUrl +  "applicant/").map((response : Response) => {
      return <ISolicitante[]> response.json();
    }).catch(this.manejadorError);
  };

  private manejadorError(error : Response)
  {
      return Observable.throw(error.statusText);
  }

  crearSolicitante(solicitante) : Observable<ISolicitante>
  {
    let headers= new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'applicant/', JSON.stringify(solicitante), options).map((response : Response) => {
      return response.json()
    }).catch(this.manejadorError);
  }
}

const solicitantes : ISolicitante[] = [{
  id : 1,
  numeroDocumento : "10294337888",
  tipoDocumento : { id : 1 , descripcion : "Cedula Ciudadania"},
  nombres : "Alexander",
  apellidos : "Aguilar",
  pais : { id : 1 , nombre : "Colombia"},
  municipio : { id : 1 , descripcion : "Bogota"  },
  direccion : "Calle 23 # 1 ",
  estrato : "4",
  telefono : "2982143",
  correoElectronico : "aguilar.alex@hgtmail.com",
  sexo : { id : 1 , descripcion : "hombre"}
},
  {
    id : 2,
    numeroDocumento : "20294337",
    tipoDocumento : { id : 1 , descripcion : "Cedula Ciudadania"},
    nombres : "Alexander1",
    apellidos : "Aguilar1",
    pais : { id : 1 , nombre : "Colombia"},
    municipio : { id : 1 , descripcion : "Bogota"  },
    direccion : "Calle 23 # 1 ",
    estrato : "4",
    telefono : "29821431",
    correoElectronico : "aguilar.alex1@hgtmail.com",
    sexo : { id : 1 , descripcion : "hombre"}
  }
];


