import {IInstitucionEducacionBasica} from "./institucion.educacion.basica.model";
/**
 * Created by edgaguil on 25/10/2017.
 */
export interface IInformacionAcademicaBasica {
  ano_inicio : number;
  ano_fin : number;
  fecha_grado : Date;
  ultimo_grado_escolar : number;
  pruebas_saber : boolean;
  calificacion_pruebas_saber : number;
  id_institucion_academica_basica : number;
  institucionAcademicaBasica? : IInstitucionEducacionBasica;
}
