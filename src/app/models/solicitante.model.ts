/**
 * Created by edgaguil on 28/07/2017.
 */
export interface ISolicitante
{
  id : number,
  numeroDocumento : string,
  tipoDocumento :
    {
      id : number,
      descripcion : string
    },
  nombres : string,
  apellidos : string,
  pais :
    {
      id : number,
      nombre : string
    },
  municipio :
    {
      id : number,
      descripcion : string
    },
  direccion : string,
  estrato : string,
  telefono : string,
  correoElectronico : string,
  sexo :
    {
      id : number,
      descripcion : string
    }


}
