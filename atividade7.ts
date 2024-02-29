const Teclado =require (`prompt-sync`)();
let x: number =1;
let contAte: number = teclado(parseFloat(`Digite o valor do contador:`));

while (x <= contAte){
    console.log(`Contador esta em ${x}`);
    x++;
} 