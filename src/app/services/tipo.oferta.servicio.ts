import {Injectable} from '@angular/core';
/**
 * Created by user on 19/08/2017.
 */

@Injectable()
export class ServicioTipoOferta {

  obtenerTipoOferta(): any[] {

    const tipoOferta = [
      {
        id : 0,
        nombre : '-- Seleccione --'
      },
      {
        id : 1,
        nombre : 'Beca completa'

      },
      {
        id : 2,
        nombre : 'Beca parcial'

      },
      {
        id : 3,
        nombre : 'Pasantia'
      }
    ];

    return tipoOferta;
  }
}
