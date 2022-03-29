import { readFileSync } from 'fs';
import { nome, sobrenome, teste } from './teste.js';

const arquivo = readFileSync('exemplo1.js');

console.log(nome, sobrenome, teste());