const teclado = require (` prompt-sync`)();// declaração teclado 
/*Para receber os dados do teclado é necessario instalar os 
pacotes riquire e prompt-sync
*/

let idade : number =parseFloat(teclado(`Digite sua idade:`));

if (idade>=18){
    console.log(`maior de idade!!`);
}
else{
    console.log(` Menor de idade `);
}
