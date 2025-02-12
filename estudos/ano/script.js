/** Ano automático
 * @author Allan Vítor
**/

// Inserindo o ano na tag <span>
let ano = document.getElementById('copyrightYear')

let anoAtual = new Date ().getFullYear()
// A linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual