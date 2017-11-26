import {Injectable} from "@angular/core";
import {ServicioBase} from "./base.servicio";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {Observable} from "rxjs/Observable";
import {IFormularioConsulta, IFormultario} from "../models/formulario.model";
import {IItemFormularioConsulta} from "../models/item.model";
/**
 * Created by edgaguil on 23/10/2017.
 */

@Injectable()
export  class ServicioFormularioEtapa extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, autenticacionService: AutenticacionService) {
    super(autenticacionService);
  }

  obtenerFormulariosEtapa(idEtapa): Observable<IFormularioConsulta[]> {
    console.log(idEtapa);
    return this.http.get(this.configuracion.baseUrl + "applicationform/phases/" + idEtapa, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IFormularioConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  eliminarFormularioEtapa(idFormulario) : Observable<boolean> {
    return this.http.delete(this.configuracion.baseUrl + 'applicationform/' + idFormulario, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <boolean>response.ok
    }).catch(this.manejadorError);
  }

  obtenerFormulario(idFormulario) : Observable<IFormularioConsulta> {
    return this.http.get(this.configuracion.baseUrl + "applicationform/" + idFormulario, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IFormularioConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  obtenerItemsFormulario(idFormulario) : Observable<IItemFormularioConsulta[]>{
    return this.http.get(this.configuracion.baseUrl + "items/applicationforms/" + idFormulario, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IItemFormularioConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  registrarFormularioEtapa(formulario : IFormultario) : Observable<IFormularioConsulta> {
    return this.http.post(this.configuracion.baseUrl + 'applicationform/', JSON.stringify(formulario), this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IFormularioConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  actuaizarFormularioEtapa(idFormulario : number, formulario : IFormultario) : Observable<IFormularioConsulta> {
    return this.http.put(this.configuracion.baseUrl + 'applicationform/' + idFormulario, JSON.stringify(formulario), this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IFormularioConsulta[]> response.json();
    }).catch(this.manejadorError);
  }
}
