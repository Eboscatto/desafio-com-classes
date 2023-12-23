//Bootcamp Dio - Potência Tech Ifood - Programação do Zero
//Terceiro desafio de projeto - escrevendo classes
//Desenvolvido por: Everaldo Boscatto

//Permitindo a entrada de dados pelo usuário
const input = require('prompt-sync')({sigint: true})

//Declarando uma classe
class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.vNomeHeroi = nomeHeroi
        this.vIdadeHeroi = idadeHeroi
        this.vTipoHeroi = tipoHeroi
    }

    //Método de ataque
    atacar(){
        //Variável que recebe o método de ataque
        let ataque = ""

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
            this.ataque = "ataque inválido "
        }

        //Saída
        console.log(`O ${this.vTipoHeroi} atacou usando ${this.ataque}`)

    } 
}

//Estrutura de repetição para instanciar objetos
do {
    let nome = input("Digite o nome do herói: ")
    let idade = input("Informe a idade do herói: ")
    let tipo = input("Informe o tipo de herói [mago, guerreiro, monge, ou ninja]: ")

    //Instanciando novo objeto
    let novoHeroi = new heroi(nome, idade, tipo.toLowerCase())
    
    //chamando o método atacar
    novoHeroi.atacar() 

    //Estrutura de decisão para interromper o looping 
    let sair = input("Instanciar um novo herói? [s/n]")
    if(sair.toLowerCase() === "n"){
        break
    }        
}while(true)

//Fim de código

