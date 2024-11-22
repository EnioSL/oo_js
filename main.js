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
        console.log("Desenhando na tela de " + this.tamanhoTela + "polegadas");
    }
}


// Classe filha 3 - smartwatch
class SmartWatch extends Dispositivo {
    constructor(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo, tipoPulseira) {
        super(sistOp, fabricante, memRam, armazInterno, anoFabricacao, modelo);
        this.batimentosMinutos = batimentosMinuto; 
    }

    // Método específico de tablet
    monitorarBatimentos() {
        console.log("Monitorando batimentos cardíacos" + this.batimentosMinuto + "BPM");
    }
}

// Instâncias de classes herdadas
const smartphone1 = new Smartphone("Android", "Samsung", 8, 128, 2023, "S24", 60);
const tablet1 = new Tablet("iOS", "Apple", 6, 256, 2023, "iPad Pro", 11);
const smartwatch1 = new SmartWatch("Wear OS", "Google", 1, 8, 2024, "Pixel Watch", "Silicone");

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


// como verificar os tipos de dados:
// const sistOp = "Android";
// const fabricante = "Samsung";
// const memRam = 8;
// const armazInterno = 128;
// const anoFabricacao = 2022;
// const modelo = "S24";
// const atributos = ["5G", "smart_lock", "face_id", "128Mhz"]

// utilizando as informações acima para criar um objeto:
// const aparelho = {
//     sistOp: sistOp,
//     fabricante: fabricante,
//     memRam: memRam,
//     armazInterno: armazInterno,
//     anoFabricacao: anoFabricacao,
//     modelo: modelo,
//     atributos: atributos, 
// }

// como acessar os atributos dentro dos objetos

// // primeira opção é através da "notação ponto": Ex. "variável.propriedade"
// console.log(aparelho.atributos) // o resultado será "Samsung" para esse caso

// // segunda maneira é com os colchetes []: Ex.variável['propriedade']
// console.log(aparelho['sistOp','fabricante','memRam','armazInterno','anoFabricacao','modelo','atributos'])

// // podemos criar um atributo dinâmico criando uma função conforme abaixo:
// function exibeAparelho(modeloAparelho) {
//     console.log(aparelho[modeloAparelho])
// }
// //chamando a função acima:
// exibeAparelho('modelo');
// // obs. Essa função acima não pode ser feita com a "notação ponto", apenas com os colchetes.