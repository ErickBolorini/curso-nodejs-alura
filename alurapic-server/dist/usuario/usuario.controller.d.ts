import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario;
    cria(usuario: Usuario): Usuario;
}
