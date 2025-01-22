/**
 Estudo das funcões
 **/

 //Função simples (literal)
 function hello() {
    console.log("Hello Function")
 }

 hello()

 //função atribuida
 const hello2 = function () {
   console.log("Hello function assigned")
 }

 console.log(typeof(hello2))
 hello2()
 
 // Arrow function (simplificação da função atribuída)
 // function ---- =>
 const hello3 = () => {
   console.log("Hello arrow function")

 } 

 console.log(typeof(hello3))
 hello3()

 //Função com passagens e parâmetros e retorno
 // Funções simples
 function somarS(num1, num2) {
   return (console.log(num1 + num2))

 }

somarS (1, 0)

//Função atribuída
const somarA = function(num1, num2){
      return(console.log(num1 + num2))
}

somarA(1, 0)

//Arrow Function
const somarAF = function(num1, num2){
   return(console.log(num1 + num2))
}

somarA(0, 0)

//Arrow Function simplificada (o retorno é implícito)
const  somarAFS = (num1,num2) => console.log (num1 + num2)
somarAFS (3, 0)
