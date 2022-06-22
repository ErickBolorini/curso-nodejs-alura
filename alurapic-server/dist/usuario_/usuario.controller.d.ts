import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
    cria(usuario: Usuario): Usuario;
}
