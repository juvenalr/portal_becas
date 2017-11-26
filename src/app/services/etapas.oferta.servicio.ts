import {Injectable} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../models/etapa.model";
import {IFormultario} from "../models/formulario.model";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {Observable} from 'rxjs/Rx';
import {ServicioBase} from "./base.servicio";

/**
 * Created by edgaguil on 20/10/2017.
 */

@Injectable()
export class ServicioEtapasOferta extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, autenticacionService: AutenticacionService) {
    super(autenticacionService);
  }

  obtenerEtapasOferta(idOferta): Observable<IEtapaConsulta[]> {
    return this.http.get(this.configuracion.baseUrl + "phase/applicantforms/" + idOferta, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IEtapaConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  obtenerEtapaOferta(idEtapaOferta): Observable<IEtapaConsulta> {
    return this.http.get(this.configuracion.baseUrl + "phase/" + idEtapaOferta, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IEtapaConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  eliminarEtapaOferta(idEtapaOferta): Observable<boolean> {
    return this.http.delete(this.configuracion.baseUrl + 'phase/' + idEtapaOferta, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <boolean>response.ok
    }).catch(this.manejadorError);
  }

  agregarEtapaOferta(etapaOferta: IEtapa) : Observable<IEtapaConsulta> {
    return this.http.post(this.configuracion.baseUrl + 'phase/', JSON.stringify(etapaOferta), this.obtenerOpcionesPeticion()).map((response: Response) => {
      return response.text() ? response.json() : {}
    }).catch(this.manejadorError);
  }

  actualizarEtapaOferta(idEtapa : number, etapaOferta: IEtapa) : Observable<IEtapaConsulta> {
    return this.http.put(this.configuracion.baseUrl + 'phase/' + idEtapa, JSON.stringify(etapaOferta), this.obtenerOpcionesPeticion()).map((response: Response) => {
      return response.text() ? response.json() : {}
    }).catch(this.manejadorError);
  }


  obtenerEtapasOfertaBK(idOferta): any[] {

    const etapasOferta = [];
    let etapa1: IEtapa;
    let etapa2: IEtapa;
    let etapa3: IEtapa;

    etapa1 = {
      nombre: 'Etapa1 ',
      descripcion: 'Descripción Etapa 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null,
      id_convocatoria: 1
    };

    etapa2 = {
      //id: 2,
      nombre: 'Etapa2 ',
      descripcion: 'Descripción Etapa 2',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null,
      id_convocatoria: 1
    };

    etapa3 = {
      //id: 3,
      nombre: 'Etapa4 ',
      descripcion: 'Descripción Etapa 4',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null,
      id_convocatoria: 1
    };

    etapasOferta.push(etapa1);
    etapasOferta.push(etapa2);
    etapasOferta.push(etapa3);

    return etapasOferta;
  }

  obtenerEtapaOfertaBK(idEtapaOferta) {
    let etapa5: IEtapa;
    let formulario: IFormultario;

    formulario = {
      id: 1,
      nombre: 'Formulario de Prueba 1',
      descripcion: 'Descripción Formulario',
      items: []
    };

    etapa5 = {
      //id: 1,
      nombre: 'Etapa1 ',
      descripcion: 'Descripción Etapa 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: formulario,
      id_convocatoria: 1
    };

    return etapa5;
  }
}
