import { readFile } from 'fs/promises';

console.log('inicio');
// const arquivo = readFileSync('teste.txt');
// console.log(arquivo);

// const arquivo = readFile('teste.txt', (erro, data) => {
//     if (erro) {
//         console.log(erro);
//     } else {
//         console.log(data);
//     }
// })

// const arquivo = readFile('teste.tx').then((data) => {
//     console.log(data);
// }).catch((erro) => {
//     console.log(erro);
// });
// console.log(arquivo);

(
    async () => {
        try {
            const arquivo = await readFile('teste.tx');
            console.log(arquivo);
        } catch (error) {
            console.log(error);
        }
    }
)();

console.log('fim');
