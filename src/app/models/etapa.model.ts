
import {Formulario, IFormultario} from "./formulario.model";
/**
 * Created by user on 19/08/2017.
 */

export class Etapa
{
  //id : number;
  id_convocatoria: number;
  nombre : string;
  fecha_inicio : Date;
  fecha_fin : Date;
  cantidad_a_seleccionar : number;
  descripcion : string;
  formulario? : Formulario;
  constructor(){}
}

export interface IEtapa
{
  //id : number;
  id_convocatoria: number;
  nombre : string;
  fecha_inicio : Date;
  fecha_fin : Date;
  cantidad_a_seleccionar : number;
  descripcion : string;
  formulario? : IFormultario;
}

export interface IEtapaConsulta
{
  id : number;
  idConvocatoria : number;
  nombre : string;
  descripcion : string;
  fechaInicio : Date;
  fechaFin : Date;
  cantidadASeleccionar : number;
}
