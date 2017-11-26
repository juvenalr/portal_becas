import {IItem, IItemFormulario, Item} from "./item.model";
/**
 * Created by user on 19/08/2017.
 */
export class Formulario
{
  id: number;
  nombre: string;
  descripcion: string;
  items: Item[];

  constructor(){}
}

export interface IFormultario
{
  id?: number; /*Validar -->  se modifica para la actualizacion */
  id_etapa? : number;
  nombre: string;
  descripcion: string;
  //items: IItem[]; /* Modificado para no crear modelos ligeramente diferentes (Modificado para ciclo 2 - valdiar funcionalidades ciclo 1)*/
  items : IItemFormulario[]
}

export interface IFormularioConsulta{
  id: number;
  idEtapa : number;
  nombre: string;
  descripcion: string;
}

/*
export interface IFormularioCreacion{
  id_etapa? : number;
  nombre : string;
  descripcion : string;
}
*/
