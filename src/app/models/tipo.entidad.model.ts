/**
 * Created by edgaguil on 29/07/2017.
 */
export interface ITipoEntidad
{
  id: number,
  nombre : string,
  descripcion : string
}

export class TipoEntidad implements ITipoEntidad
{
  id: number;
  nombre: string;
  descripcion: string;
}

