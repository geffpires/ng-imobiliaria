import { Cliente } from './cliente';

export class PessoaFisica extends Cliente {
    constructor(private CPF: string){
        super()
    }
}