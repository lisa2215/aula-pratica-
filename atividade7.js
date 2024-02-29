var Teclado = require("prompt-sync")();
var x = 1;
var contAte = teclado(parseFloat("Digite o valor do contador:"));
while (x <= contAte) {
    console.log("Contador esta em ".concat(x));
    x++;
}
