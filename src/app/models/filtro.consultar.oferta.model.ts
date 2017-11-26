/**
 * Created by edgaguil on 17/10/2017.
 */

import {TipoCriterioBusquedaOferta} from "../enums/criterio.busqueda.oferta.enum";

export interface IFiltroConsultarOferta
{
  tipoCriterioBusquedaOferta : TipoCriterioBusquedaOferta ;
  codigoConvocatoria : number;
}
