import { Injectable } from '@angular/core'
/**
 * Created by edgaguil on 28/07/2017.
 */


@Injectable()
export class ListadoSolicitanteService {

  obtenerListadoSolicitantes()
  {
    return solicitantes;

  }

}

const solicitantes = [{
  id : 1,
  numeroDocumento : "10294337888",
  tipoDocumento : { id : 1 , descripcion : "Cedula Ciudadania"},
  nombres : "Alexander",
  apellidos : "Aguilar",
  pais : { id : 1 , nombre : "Colombia"},
  municipio : { id : 1 , descripcion : "Bogota"  },
  direccion : "Calle 23 # 1 ",
  estrato : "4",
  telefono : "2982143",
  correoElectronico : "aguilar.alex@hgtmail.com",
  sexo : { id : 1 , descripcion : "hombre"}
},
  {
    id : 2,
    numeroDocumento : "20294337",
    tipoDocumento : { id : 1 , descripcion : "Cedula Ciudadania"},
    nombres : "Alexander1",
    apellidos : "Aguilar1",
    pais : { id : 1 , nombre : "Colombia"},
    municipio : { id : 1 , descripcion : "Bogota"  },
    direccion : "Calle 23 # 1 ",
    estrato : "4",
    telefono : "29821431",
    correoElectronico : "aguilar.alex1@hgtmail.com",
    sexo : { id : 1 , descripcion : "hombre"}
  }
];

