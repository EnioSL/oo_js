// Modo de criar objetos no Java Script: "Função construtora"

// função construtora
// por convenção a inicial é maiúscula "Dispositivo"
// Obs. Não entra o "método wi_fi" por ser compartilhado entre todos os smartphones, ou seja, todos terão "wi_fi" nesse atributo.

class Dispositivo {
    constructor(sistOp, fabricante, memRam, armazInterno, modelo, anoFabricacao) {
        //atributo dentro de uma função construtora utiliza-se o "this.atributo = atributo"
        this.sistOp = sistOp;
        this.fabricante = fabricante;
        this.memRam = memRam;
        this.armazInterno = armazInterno;
        this.anoFabricacao = anoFabricacao;
        this.modelo = modelo;
    }

    // método "wi_fi" - Repare que não precisou ser incluído como atributo na "function Smartphone" acima.
    // recebe como parâmetro uma função "function() ...".
    wi_fi() {
        console.log("conecta com wi-fi 6.0");
    }
}


// Classe filha 1 - Smartphone
class Smartphone extends Dispositivo {
    constructor(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo, camera) {
        super(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo);
        this.camera = camera; 
    }

    // Método específico de smartphone
    tirarFoto() {
        console.log("Tirando foto com câmera de " + this.camera + "MP");
    }
}


// Classe filha 2 - Tablet
class Tablet extends Dispositivo {
    constructor(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo, tamanhoTela) {
        super(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo);
        this.tamanhoTela = tamanhoTela; 
    }

    // Método específico de tablet
    desenhar() {
        console.log("Desenhando na tela de " + this.tamanhoTela + " polegadas ");
    }
}


// Classe filha 3 - smartwatch
class SmartWatch extends Dispositivo {
    constructor(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo, frequenciaCardiaca) {
        super(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo);
        this.frequenciaCardiaca = frequenciaCardiaca; 
    }

    // Método específico de Smartwatch
    monitorarBatimentos() {
        console.log(" Monitorando batimentos cardíacos " + this.frequenciaCardiaca + " BPM ");
    }
}

// Instâncias de classes herdadas
const smartphone1 = new Smartphone("Android", "Samsung", 8, 128, 2023, "S24", 60);
const tablet1 = new Tablet("iOS", "Apple", 6, 256, 2023, "iPad Pro", 11);
const smartwatch1 = new SmartWatch("Wear OS", "Google", 1, 8, 2024, "Pixel Watch", " 75 ");

// Exibindo os objetos e chamando métodos

console.log(smartphone1);
smartphone1.wi_fi();
smartphone1.tirarFoto();

console.log(tablet1);
tablet1.wi_fi();
tablet1.desenhar();

console.log(smartwatch1);
smartwatch1.wi_fi();
smartwatch1.monitorarBatimentos();