import {Respuesta} from "./respuesta.model";
import {ITipoItem} from "./tipo.item.model";
/**
 * Created by edgaguil on 10/08/2017.
 */
export class Item implements  IItem
{
  public id : number;
  public descripcion : string;
  public idTipoControl : number;
  public valor : string;
  public activo : boolean;
  public listaRespuestas? : Respuesta[];
  public requerido : boolean;
  public tamanoMaximo : number;
  constructor(){}
}

export interface IItem
{
  //id : number,
  descripcion : string,
  idTipoControl : number,
  valor : string,
  activo : boolean,
  listaRespuestas? : Respuesta[],
  requerido : boolean,
  tamanoMaximo : number
}


export class ItemFormulario implements  IItemFormulario
{
  public nombre : string;
  public descripcion : string;
  public id_tipo_item : number;
  public tamanio : number;
  public obligatorio : boolean;
  public valores_posibles : string[];

  constructor(){}
}

export interface IItemFormulario
{
  //id : number,
  nombre : string,
  descripcion : string,
  id_tipo_item : number,
  tamanio : number,
  obligatorio : boolean,
  valores_posibles : string[]
}

export interface IItemFormularioConsulta{
  id: number;
  idFormulario: number;
  nombre : string,
  descripcion : string;
  tamanio : number;
  obligatorio : boolean;
  valoresPosibles : string[];
  tipoItem :ITipoItem;
}

