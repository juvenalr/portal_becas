/**
 * Created by edgaguil on 29/07/2017.
 */

export interface IEstadoSistema
{
  id: number,
  descripcion : string
}

export class EstadoSistema implements IEstadoSistema
{
  id: number;
  descripcion: string;
}
