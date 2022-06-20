/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";

@Controller('users')
export class UsuarioController {

    //private usuarios = [];
    private usuarioService = new UsuarioService();

    @Post()
    public cria(@Body() usuario){
        //this.usuarios.push(usuario);
        const usuarioCriado = this.usuarioService.cria(usuario);
        return usuarioCriado;
    }
}