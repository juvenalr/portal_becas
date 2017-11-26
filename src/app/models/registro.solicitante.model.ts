/**
 * Created by edgaguil on 13/08/2017.
 */
import {IExperienciaLaboral} from "./experiencia.laboral.model";
import {IInformacionAcademicaBasica} from "./informacion.academica.basica.model";
import {IInformacionAcademicaSuperior} from "./informacion.academica.superior.model";
import {IInformacionNivelIdioma} from "./informacion.nivel.idioma.model";
/**
 * Created by edgaguil on 28/07/2017.
 */

export interface IRegistroSolicitante
{
  id : number,
  correoElectronico : string,
  username : string,
  contrasena : string,
  nombre : string,
  numero_documento : string,
  apellidos : string,
  direccion : string,
  telefono : string,
  estrato : string,
  id_tipo_documento: number,
  sexo: number,
  id_tipo_poblacion: number,
  pais_nacimiento: number,
  pais_residencia: number,
  departamento_nacimiento: number,
  departamento_residencia: number,
  municipio_nacimiento: number,
  municipio_residencia: number,
  workExperienceList : IExperienciaLaboral[],
  higherAcademicInfoList : IInformacionAcademicaSuperior[],
  basicAcademicInfoList : IInformacionAcademicaBasica[],
  languageLevelList : IInformacionNivelIdioma[]
}
