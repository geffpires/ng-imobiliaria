import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { PessoaFisica } from './pessoaFisica';
import { PessoaJuridica } from './pessoaJuridica';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[]

  constructor() { 
    this.criaTresClientesPessoaFisicaEmMemoria()
    this.criaTresClientesPessoaJuridicaEmMemoria()
    // this.printarUsuariosNoConsoleLog()
  }

  // ======== Métodos temporários ======== 
  private criaTresClientesPessoaFisicaEmMemoria() : void {
    let joao: Cliente = new PessoaFisica('154.154.154-15')
    let maria: Cliente = new PessoaFisica('123.123.123-12')
    let eduarda: Cliente = new PessoaFisica('456.456.456-45')
    
    this.clientes = [
      joao, maria, eduarda 
    ]
  }

  private criaTresClientesPessoaJuridicaEmMemoria () {
    let hermanoteu: Cliente = new PessoaJuridica('45.000.111.0010-45') 
    let luciano: Cliente = new PessoaJuridica('79.379.491.0008-50')
    let laryssa: Cliente = new PessoaJuridica('88.888.888.8885-88')

    this.clientes.push(hermanoteu)
    this.clientes.push(luciano)
    this.clientes.push(laryssa)
  }
  
  private printarUsuariosNoConsoleLog(): void {
    this.clientes.forEach(element => {
      console.log(element)
    });
  }

}
