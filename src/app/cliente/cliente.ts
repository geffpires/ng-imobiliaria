import { Endereco } from '../endereco';

export abstract class Cliente {

    protected id: number
    protected nomeCompleto: string
    protected RG: string
    protected orgaoExpeditor: string
    protected telefone: string
    protected email: string
    protected profissao: string
    protected endereco: Endereco
    protected tipoCliente: TipoCliente
}