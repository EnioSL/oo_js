// Modo de criar objetos no Java Script: "Função construtora"

// função construtora
// por convenção a inicial é maiúscula "Carro"
// Obs. Não entra o "método wi_fi" por ser compartilhado entre todos os smartphones, ou seja, todos terão "wi_fi" nesse atributo.
function Smartphone(sistOp, fabricante, memRam, armazInterno, modelo, anoFabricacao) {
    //atributo dentro de uma função construtora utiliza-se o "this.atributo = atributo"
    this.sistOp = sistOp;
    this.fabricante = fabricante;
    this.memRam = memRam;
    this.armazInterno = armazInterno;
    this.anoFabricacao = anoFabricacao;
    this.modelo = modelo;
    // método "wi_fi" - Repare que não precisou ser incluído como atributo na "function Smartphone" acima.
    // recebe como parâmetro uma função "function() ...".
    this.wi_fi = function() {
        console.log("conecta com wi-fi 6.0");
    }
}

// Abaixo a construção de como utilizar a estrutura acima para os smartphones:
// Utiliza-se o "new" para obter o retorno do objeto que foi criado vide exemplo abaixo:

const smartphone1 = new Smartphone("Android", "Samsung", 8, 128, 2022, "S24");
const smartphone2 = new Smartphone("IOS", "Apple", 6, 128, 2021, "Iphone_14");

console.log(smartphone1);
console.log(smartphone2);





// como verificar os tipos de dados:
const sistOp = "Android";
const fabricante = "Samsung";
const memRam = 8;
const armazInterno = 128;
const anoFabricacao = 2022;
const modelo = "S24";
const atributos = ["5G", "smart_lock", "face_id", "128Mhz"]

// utilizando as informações acima para criar um objeto:
const aparelho = {
    sistOp: sistOp,
    fabricante: fabricante,
    memRam: memRam,
    armazInterno: armazInterno,
    anoFabricacao: anoFabricacao,
    modelo: modelo,
    atributos: atributos, 
}

// como acessar os atributos dentro dos objetos

// primeira opção é através da "notação ponto": Ex. "variável.propriedade"
console.log(aparelho.atributos) // o resultado será "Samsung" para esse caso

// segunda maneira é com os colchetes []: Ex.variável['propriedade']
console.log(aparelho['sistOp','fabricante','memRam','armazInterno','anoFabricacao','modelo','atributos'])

// podemos criar um atributo dinâmico criando uma função conforme abaixo:
function exibeAparelho(modeloAparelho) {
    console.log(aparelho[modeloAparelho])
}
//chamando a função acima:
exibeAparelho('modelo');
// obs. Essa função acima não pode ser feita com a "notação ponto", apenas com os colchetes.