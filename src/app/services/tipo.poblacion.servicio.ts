/**
 * Created by edgaguil on 13/08/2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export  class ServicioTipoPoblacion
{

  obtenerTipoPoblacion() : any[] {
    const tiposPoblacion = [
       {
        id : 0,
         descripcion : "-- Seleccione --"
       },
      {
        id : 13,
        descripcion : "Blanco"
      },
      {
        id : 14,
        descripcion : "Negro"
      },
      {
        id : 15,
        descripcion : "Indigena"
      },
      {
        id : 15,
        descripcion : "Meztizo"
      },
    ];
    return tiposPoblacion;
  }
}

