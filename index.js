//Bootcamp Dio - Potência Tech Ifood - Programação do Zero
//Terceiro desafio de projeto - escrevendo classes
//Desenvolvido por: Everaldo Boscatto

const input = require('prompt-sync')({sigint: true})
//Criando uma classe

class heroi{

    ataque = ""

    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.vNomeHeroi = nomeHeroi
        this.vIdadeHeroi = idadeHeroi
        this.vTipoHeroi = tipoHeroi
    }

    atacar(){

        if(this.vTipoHeroi === "mago"){
            this.ataque = "magia"
        }else if(this.vTipoHeroi === "guerreiro"){
            this.ataque = "espada"
        }else if(this.vTipoHeroi === "monge"){
            this.ataque = "artes marciais"
        }else if(this.vTipoHeroi === "ninja"){
            this.ataque = "shuriken"
        }else{
            this.vTipoHeroi = `${this.vTipoHeroi} é um tipo inválido`
            this.ataque = " "
        }

        console.log(`O ${this.vTipoHeroi} atacou usando ${this.ataque}`)

    } 
}

//Estanciando objeto
let opcao = sair

do {
    let nome = input("Digite o nome do herói: ")
    let idade = input("Informe a idade do herói: ")
    let tipo = input("Informe o tipo de herói [mago, monge, ou ninja]: ")

    let novoHeroi = new heroi(nome, idade, tipo.toLowerCase())
    novoHeroi.atacar()

    var sair = input("Sair do programa? [S/N]")
    
}while(opcao === "s")

