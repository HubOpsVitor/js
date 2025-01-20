/**
 Tipagem dinâmica - JS
**/

// declaração de variáveis
let nome, idade, peso, altura, vip, imc, fcm;

console.clear();
nome = "Allan Vítor";
idade = 18;
peso = 57.30;
altura = 1.70;
vip = true;

/** As linhas abaixo verificam o tipo da variável **/
console.log(typeof(nome));
// console.log(typeof(number));
// console.log(typeof(vip));

console.clear();

// processamento
// imc (Índice de massa corporal | fcm (Frequência cardíaca máxima))
imc = peso / (altura * altura); // Correção do cálculo do IMC
fcm = 208 - (0.7 * idade); // Correção da fórmula de FCM

// saída

console.log("Ficha do Aluno");
console.log("_________________________________________");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Peso: ${peso}`);
console.log(`Altura: ${altura}`);
console.log(`Vip: ${vip}`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`FCM: ${fcm} bpm`);
