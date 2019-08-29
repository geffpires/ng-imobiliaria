import { Cliente } from './cliente';

export class PessoaJuridica extends Cliente{
    constructor(private CNPJ: string){
        super()
    }
}