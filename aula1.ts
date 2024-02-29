console.clear();
const teclado = require(`prompt-sync`)();

let ola : string = teclado(`digite uma congratatulação:`);
let nome : string = teclado(`digite seu nome:`);
let passatempo: string = teclado(`digite seu passatempo:`);
let diaAniversario: number = teclado(`digite o dia do aniversário:`);
let mesAniversario: string = teclado(`digite o mes do aniversário:`);
let anoAniversario: number = teclado(`digite o ano de aniversário:`);

console.log(`${ ola }`);
console.log(`meu nome é ${nome},nascida no dia ${diaAniversario},`);
console.log(`no mes ${`mesAniversario` } no ano de ${ anoAniversario },`);
console.log(`meu atual passatempo é ${`anoAniversario`}`);
