// spread/rest operator

const pessoa = {
    nome: 'Guido',
    email: 'guido@email.com',
    endereco: {
        rua: 'Rua A',
        bairro: 'centro'
    }
}

// const novaPessoa = {
//     ...pessoa,
//     telefone: '(71) 9 9999-9999'
// }

// const novaPessoa2 = {
//     ...pessoa,
//     ...novaPessoa
// }

// console.log(novaPessoa2);

const usuarios = ['Guido', 'Diego', 'João'];

// const usuarios2 = ['Ruli', ...usuarios, { ...pessoa }];

// console.log(usuarios2);

// const { nome, email, ...restoPessoa } = pessoa;

// console.log(nome, email, restoPessoa);

const [nome1, ...novoArray] = usuarios;

console.log(nome1, novoArray);