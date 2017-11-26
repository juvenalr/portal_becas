export interface IUsuarioS
{
    token:string,
    usuario: string,
    rol: string,
    idUsuario : number
}

export class UsuarioS implements IUsuarioS
{
    token:string;
    usuario: string;
    rol: string;
    idUsuario : number;
}

