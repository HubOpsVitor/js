/**
 * POO
 * Atividade veículos (Abstração, Herança e Polimorfismo só que com automóveis)
 * @author Allan Vítor
 */

// Classe modelo Carro
class Carro {
    // Atributos
    constructor(ano, cor) {
        this.ano = ano;
        this.cor = cor;
    }
    
    // Ações
    criarCarro() {
        console.log("---------------------------------------");
        console.log("Carro de cor:" , this.cor, "do ano:", this.ano);
    }
    
    ligar() {
        console.log("Carro ligado!");
    }
    
    desligar() {
        console.log("Carro desligado!");
    }
    
    acelerar() {
        console.log("Vruummm!");
    }
}

// Classe modelo Aviao com herança do Carro
class Aviao extends Carro {
    // Atributos
    constructor(ano, cor, envergadura) {
        super(ano, cor);
        this.envergadura = envergadura;
    }
    
    // Ações
    criarAviao() {
        console.log("--------------------------------------");
        console.log("Avião de:" , this.cor, "de modelo:" , this.ano);
        console.log("Envergadura:" ,this.envergadura ,"centímetros entre as asas:");
    }
    
    aterrissar() {
        console.log("Avião aterrissou com sucesso!");
    }
    
    acelerar() {
        console.log("Avião ganhando velocidade para decolagem!");
    }
}

/****** Automóveis ******/
console.clear();
console.log("Bem-vindo, escolha seu meio de transporte e partiu viajar!");

// Instanciando (criando) objetos
const carro1 = new Carro(2020, "Ferrari Vermelha");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

const carro2 = new Carro(1975, "Fusca Azul");
carro2.criarCarro();
carro2.ligar();
carro2.acelerar();
carro2.desligar();

const aviao1 = new Aviao("Boeing 737-000", "Companhia aérea Gol, branco e laranja", 75);
aviao1.criarAviao();
aviao1.acelerar();
aviao1.aterrissar();

const aviao2 = new Aviao("Boeing 737", "Companhia aérea Azul, branco com detalhes azuis", 72);
aviao2.criarAviao();
aviao2.acelerar();
aviao2.aterrissar();
