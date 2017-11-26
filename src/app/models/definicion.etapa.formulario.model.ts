/**
 * Created by user on 21/08/2017.
 */
/**
 * Created by edgaguil on 10/08/2017.
 */

export interface IDefincionEtapaFormulario
{
  nombre_etapa : string;
  fecha_inicio_etapa : Date;
  fecha_fin_etapa : Date;
  descripcion_etapa : string;
  cantidad_seleccionar : number;
  formulario_nombre : string;
  formulario_descripcion : string;

  nombreItem : string;
  tipoControl : string;
  tipoDelimitador : string;
  opciones : string;
  requerido : boolean;
  tamanoMaximo? : number;
}

export class DefincionEtapaFormulario implements  IDefincionEtapaFormulario
{
  nombre_etapa : string;
  fecha_inicio_etapa : Date;
  fecha_fin_etapa : Date;
  descripcion_etapa : string;
  cantidad_seleccionar : number;
  formulario_nombre : string;
  formulario_descripcion : string;

  nombreItem : string;
  tipoControl : string;
  tipoDelimitador : string;
  opciones : string;
  requerido : boolean;
  tamanoMaximo? : number;

  constructor(){
  }
}
