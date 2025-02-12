/**  Estudo do método setInterval
* @author ALlan Vítor 
**/

function piscar (){
    let ligada = false
    // a estrutura abaixo cria um intervalo a cada 1000ms (milisegundos) que equivalem a 1seg
    setInterval(() => {if (ligada === false ) {
        document.getElementById('lamp').src="img/on.jpg"
    } else {
        document.getElementById('lamp').src="img/off.jpg"
    }
    ligada = !ligada //Função NOT inverte (true... false... - true...)
},200) // ajuste do intervalo 1000ms = 1seg
    
}