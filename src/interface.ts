export interface Aluno {
    media: number
    situacao: boolean
}

export interface NotaPeso {
    nota: number
    peso: number
}

export interface CarteiraDinheiro {
    saldo: number,
    entrada: number,
    saida: number
}

export interface Produto {
    id: number,
    nome: string,
    preco: number,
    emEstoque: boolean
}

export interface User {
    nome: string,
    idade: number,
    ocupacao: ocupacao,
    salario?: number
}

type ocupacao = "Desenvolvedor" | "Diretor"

export interface Diretor {
    nome: string,
    idade: number,
    ocupacao: ocupacao,
    nivelComisionamento: number
    salario?: number,
}
export type Funcionario = User | Diretor