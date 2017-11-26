/**
 * Created by edgaguil on 9/08/2017.
 */

export interface IPais
{
  id_pais: number,
  abreviatura : string,
  nombre : string,
  nacionalidad : string
}

export class Pais implements IPais
{
  id_pais: number;
  abreviatura : string;
  nombre : string;
  nacionalidad : string;
}

