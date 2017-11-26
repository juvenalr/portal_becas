import {Injectable} from "@angular/core";
import {Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {IOferta, IOfertaConsulta, Oferta} from "../models/oferta.model";
import {AutenticacionService} from "./autenticacion.service";
import {IFiltroConsultarOferta} from "../models/filtro.consultar.oferta.model";
import {ServicioBase} from "./base.servicio";

/**
 * Created by edgaguil on 8/08/2017.
 */

@Injectable()
export class ServicioOferta extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, autenticacionService: AutenticacionService) {
    super(autenticacionService);
  }

  crearOferta(oferta): Observable<IOferta> {
    return this.http.post(this.configuracion.baseUrl + 'offerers/', JSON.stringify(oferta), this.obtenerOpcionesPeticion()).map((response: Response) => {
      return response.json()
    }).catch(this.manejadorError);
  }

  crearOfertaConvocatoria(oferta): Observable<IOferta> {
    return this.http.post(this.configuracion.baseUrl + 'announcements/', JSON.stringify(oferta), this.obtenerOpcionesPeticion()).map((response: Response) => {
      return response.text() ? response.json() : {}
    }).catch(this.manejadorError);
  }

  /** */
  consultarOfertasSolicitante(codigoConvocatoria): Observable<IOfertaConsulta[]> {
    if(codigoConvocatoria > 0)
    {
      return this.http.get(this.configuracion.baseUrl +  "announcements/" + codigoConvocatoria, this.obtenerOpcionesPeticion()).map((response : Response) => {
        let resultado : IOfertaConsulta[] = [];
        console.log(response.text());

        if(response.text()){
          let ofertaEncontrada : IOfertaConsulta = <IOfertaConsulta> response.json();
          resultado.push(ofertaEncontrada);
        }

        //return <IOfertaConsulta[]> response.json();
        return resultado;
      }).catch(this.manejadorError);
    }
    else{
      return this.http.get(this.configuracion.baseUrl +  "announcements/", this.obtenerOpcionesPeticion()).map((response : Response) => {
        return <IOfertaConsulta[]> response.json();
      }).catch(this.manejadorError);
    }
  }

  consultarOfertasOferente(codigoConvocatoria) : Observable<IOfertaConsulta[]> {
    let idOferente = this.autenticacionService.obtenerCookie('idUsuario');
    console.log("idOferente");
    console.log(idOferente);
    return this.http.get(this.configuracion.baseUrl +  "announcements/offerers/" + idOferente +  "/" + codigoConvocatoria, this.obtenerOpcionesPeticion()).map((response : Response) => {
      return <IOfertaConsulta[]> response.json();
    }).catch(this.manejadorError);
  }


  consultarOferta(idOferta): Observable<IOfertaConsulta> {
    return this.http.get(this.configuracion.baseUrl +  "announcements/" + idOferta, this.obtenerOpcionesPeticion()).map((response : Response) => {
      return <IOfertaConsulta[]> response.json();
    }).catch(this.manejadorError);
  }


  /*
  consultarOfertasBK(codigoConvocatoria): IOferta[] {
    const ofertas = [];
    let oferta1: IOferta;
    let oferta2: IOferta;

    oferta1 = {
      id : 1,
      id_oferente: 1,
      nombre: 'Oferta 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      descripcion: 'Descripción 1',
      id_tipo_convocatoria: 1,
      requisitos: 'requisitos1',
      condiciones: 'condiciones1',
      informacion_adicional: 'informacion adicional1',
      etapas : []
    };

    oferta2 = {
      id : 2,
      id_oferente: 2,
      nombre: 'Oferta 2',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      descripcion: 'Descripción 2',
      id_tipo_convocatoria: 1,
      requisitos: 'requisitos2',
      condiciones: 'condiciones2',
      informacion_adicional: 'informacion adicional2',
      etapas : []
    };

    ofertas.push(oferta1);
    ofertas.push(oferta2);

    return ofertas;
  }

  consultarOfertaBK(idOferta): IOferta {
    let oferta1: IOferta;

    oferta1 = {
      id : 1,
      id_oferente: 1,
      nombre: 'Oferta 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      descripcion: 'Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1 Descripción 1',
      id_tipo_convocatoria: 1,
      requisitos: 'requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1 requisitos1',
      condiciones: 'condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1 condiciones1',
      informacion_adicional: 'informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1 informacion adicional1',
      etapas : []
    };

    return oferta1;

  }
  */
}


