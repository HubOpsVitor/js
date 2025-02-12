/**
 * estudo do array (vetor)
 * @author Allan Vítor
 */

console.clear();
let alunos = [];
console.log(typeof alunos);

let alunosEM1 = ["Vitor", "Tânia", "Pedro", "Maria", "Viviane"];
console.log(typeof alunosEM1);

console.log(alunosEM1.length);
// exibindo os dados de um array

console.log(alunosEM1);
// exibindo um aluno do array

console.log(alunosEM1[2]);

console.table(alunosEM1);

// adicionando um elemento ao array
alunosEM1.push("Luiza");
console.table(alunosEM1);

// Modificar um elemento do array
alunosEM1[0] = "Victor";
console.table(alunosEM1);

// Excluir um elemento do Array
delete alunosEM1[2];
console.table(alunosEM1);

// Percorrendo um Array
let notas = [3, 8, 9, 2];

// Uso do laço para percorrer um Array
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

//forEach (simplificando do laço para uso em Array)
notas.forEach((n) => {
    console.log(n)
})

// map (mapeamento da estrutura de dados para calculos e conversoes)
// Exemplo 1: Adicionar 1 ponto as notas

let notasAtualizadas = notas.map((na) => {
    return na + 1
})

console.log(notas)
console.log(notasAtualizadas)

//Exemplo 2: Conversão de sistema de notas
/*
    NA - Não atendeu (nota < 5)
    PA - Parcialmente atendito (nota entre 5 e 7)
    A - Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})

console.log(notas)
console.log(notasConvertidas)