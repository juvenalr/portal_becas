/**
 * Created by edgaguil on 10/09/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
import {ITipoItem} from "../models/tipo.item.model";
import {ServicioBase} from "./base.servicio";
import {AutenticacionService} from "./autenticacion.service";


/**
 * Created by edgaguil on 9/08/2017.
 */


@Injectable()
export class ServicioTipoItemFormulario extends ServicioBase {
  //Servicio renombrado de ServicioTipoItem a ServicioTipoItemFormulario (validar funcionalidades ciclo1)

  constructor(private http: Http, private configuracion: ConfiguracionServicio, servicioAutenticacion: AutenticacionService) {
    super(servicioAutenticacion);
  }

  obtenerTiposItem(): Observable<ITipoItem[]> {
    return this.http.get(this.configuracion.baseUrl + "general/itemtypes/ ", this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <ITipoItem[]> response.json();
    }).catch(this.manejadorError);
  };
}

