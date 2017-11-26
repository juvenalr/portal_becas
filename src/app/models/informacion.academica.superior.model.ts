import {IInstitucionEducacionSuperior} from "./institucion.educacion.superior";
/**
 * Created by edgaguil on 25/10/2017.
 */
export interface IInformacionAcademicaSuperior {
  id_institucion_academica_superior : number;
  ano_inicio : number;
  ano_fin : number;
  fecha_grado : Date;
  nombre_programa : string;
  semestres_programa : number;
  semestres_cursados : number;
  titulo_obtenido : string;
  cantidad_creditos : number;
  registro_calificado : boolean;
  tipo_programa : string;
  institucionAcademicaSuperior? : IInstitucionEducacionSuperior;
}
