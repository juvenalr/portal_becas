/**
 * Created by edgaguil on 10/08/2017.
 */

export interface IDefincionItemFormulario
{
  nombreItem : string,
  tipoControl : string,
  tipoDelimitador : string,
  opciones : string,
  requerido : boolean,
  tamanoMaximo? : number,
}

export class DefincionItemFormulario implements  IDefincionItemFormulario
{
  public nombreItem : string;
  public tipoControl : string;
  public tipoDelimitador : string;
  public opciones : string;
  public requerido : boolean;
  public tamanoMaximo? : number;

  constructor(){
  }
}
