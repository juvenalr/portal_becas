/**
 * Created by edgaguil on 28/07/2017.
 */

export interface IUsuario
{
  id : number,
  login : string,
  password : string,
  confirmarPassword : string,
  correoElectronico : string
}

export class Usuario implements IUsuario
{
  id: number;
  login: string;
  password: string;
  confirmarPassword: string;
  correoElectronico: string;

}

