// desestruturação

// const usuario = {
//     nome: 'Guido',
//     sobrenome: 'Cerqueira',
//     email: 'guido@email.com',
//     endereco: {
//         rua: 'Rua A'
//     }
// }

// const nome = 'Guido';

// const {
//     nome: nomequalquer,
//     sobrenome,
//     email,
//     endereco: {
//         rua
//     }
// } = usuario;

// console.log(nomequalquer, sobrenome, email, rua);

const nomes = ['Guido', 'Dani', 'Vidal', 'Ruli'];

const [nome1, nome2, nome3, nome4] = nomes;

console.log(nome1, nome2, nome3, nome4);