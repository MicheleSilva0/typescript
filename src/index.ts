
import { Aluno, NotaPeso, CarteiraDinheiro, Produto, User, Diretor, Funcionario } from "./interface";

// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

const resultado = imprime_media_aprovReprov(8, 9)

function imprime_media_aprovReprov(nota1: number, nota2: number): Aluno {
    let situacao: boolean
    const media: number = (nota1 + nota2) / 2

    if (media >= 6) {
        situacao = true
    } else {
        situacao = false
    }

    return { media, situacao }
}

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

const notas: NotaPeso[] = [
    {
        nota: 8,
        peso: 7
    },
    {
        nota: 9,
        peso: 6
    },
    {
        nota: 7,
        peso: 6
    }
]

calcula_media_notas(notas)

function calcula_media_notas(notas: NotaPeso[]): void {

    const somaNotas: number = notas.reduce((previous, current) => {
        return previous + (current.nota * current.peso)
    }, 0)

    const somaPesos: number = notas.reduce((acumulado, atual) => {
        return acumulado + atual.peso
    }, 0)

    const mediaPonderada = somaNotas / somaPesos

    console.log(mediaPonderada);

}

// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

let carteira: CarteiraDinheiro = {
    saldo: 1000,
    entrada: 0,
    saida: 0
}

lanca_entrada_saida(carteira)

function lanca_entrada_saida(carteira: CarteiraDinheiro): void {
    carteira.saida = 1100
    carteira.saldo += carteira.entrada = 100

    if (carteira.saldo < carteira.saida) {
        console.log(`Saldo insuficiente! Saldo atual: ${carteira.saldo}`);
        carteira.saida = 0
    } else {
        carteira.saldo -= carteira.saida
        console.log(`Saida realizada com sucesso! Saldo atual: ${carteira.saldo}`);
    }
}


// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

const produtos: Produto[] = []
cadastrar(produtos)
excluirProduto(produtos, 1)

function listar(produtos: Produto[]): void {
    console.log(produtos);
}

function cadastrar(produtos: Produto[]): void {

    for (let i = 1; i < 4; i++) {
        const novoProduto: Produto = {
            id: i,
            nome: `Bola ${i}`,
            preco: 35 + i,
            emEstoque: false
        }
        produtos.push(novoProduto)
        listar(produtos)
    }
}

function excluirProduto(produtos: Produto[], id: number): void {
    const existeProduto = produtos.findIndex((produto) => { return produto.id === id })

    if (existeProduto === -1) {
        console.log("Produto não encontrado!!");
        return
    }

    produtos.splice(existeProduto, 1)
    listar(produtos)

}



// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

const usuario: User = {
    nome: "Michele",
    idade: 21,
    ocupacao: "Desenvolvedor",
}
const usuario1: User = {
    nome: "Michele1",
    idade: 21,
    ocupacao: "Desenvolvedor",
    salario: 4000
}

verificaSalario(usuario)
verificaSalario(usuario1)

function verificaSalario(usuario: User): void {

    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, ${usuario.salario ?? 'salário N/A'}`);

}

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”


const diretor: Diretor = {
    nome: "Michele2",
    idade: 21,
    ocupacao: "Diretor",
    nivelComisionamento: 5
}
const diretor1: Diretor = {
    nome: "Michele3",
    idade: 21,
    ocupacao: "Diretor",
    salario: 4000,
    nivelComisionamento: 5
}

mostraInformacaoDiretor(diretor)
mostraInformacaoDiretor(diretor1)

function mostraInformacaoDiretor(diretor: Diretor): void {

    console.log(`${diretor.nome}, ${diretor.idade} anos, comissão nivel ${diretor.nivelComisionamento}, ${diretor.ocupacao}, ${diretor.salario ?? 'salário N/A'}`);
}


// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

const funcionario: Funcionario[] = [
    {
        nome: "Michele4",
        idade: 21,
        ocupacao: "Diretor",
        nivelComisionamento: 4
    },
    {
        nome: "Carol",
        idade: 24,
        ocupacao: "Diretor",
        nivelComisionamento: 5,
        salario: 1500
    },
    {
        nome: "Ciclano",
        idade: 28,
        ocupacao: "Desenvolvedor",
    },
    {
        nome: "Fulano",
        idade: 27,
        ocupacao: "Desenvolvedor",
        salario: 1500
    },
]
function mostraInformacao(funcionarios: Funcionario[]) {

    funcionarios.forEach((funcionario) => {
        if ('nivelComisionamento' in funcionario) {
            console.log(`${funcionario.nome}, ${funcionario.idade} anos, comissão nivel ${funcionario.nivelComisionamento}, ${funcionario.ocupacao}, ${funcionario.salario ?? 'salário N/A'}`);
        } else {
            console.log(`${funcionario.nome}, ${funcionario.idade} anos, ${funcionario.ocupacao}, ${funcionario.salario ?? 'salário N/A'}`);
        }
    })
}

mostraInformacao(funcionario)