import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag:boolean;
  constructor() { }

  logar(nome: string,sobrenome:string, rg:number, orgao:string, cpf:number,telefone:number,email:string,profissao:string,estado:string,cidade:string,rua:string,numero:number){
    this.flag=true;
    this.verificar(nome);
    this.verificar(sobrenome);
    this.verificar(orgao);
    this.verificar(email);
    this.verificar(profissao);
    this.verificar(estado);
    this.verificar(cidade);
    this.verificar(rua);
    this.verificarNum(rg);
    this.verificarNum(cpf);
    this.verificarNum(telefone);
    this.verificarNum(numero);
    if(this.flag){
      console.log("funcionou");
      
    }


    return false;
    
  }
  verificar(nome:string):boolean{
    if(nome==""){
      this.flag=false;
      return false;  
    }
    return true;
  }
  verificarNum(numero:number):boolean{
    if(numero ==0){
      this.flag=false;
      return false;  
    }
    return true;
  }

  ngOnInit() {
  }

}
