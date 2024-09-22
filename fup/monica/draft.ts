let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let M: number = +input(); // Idade de dona Mônica
let A: number = +input(); // Idade de um dos filhos
let B: number = +input(); // Idade de outro filho

// A idade do terceiro filho é calculada subtraindo A e B da idade de Mônica
let C: number = M - (A + B);

// Agora vamos determinar quem é o filho mais velho
let maiorIdade: number;

if (A > B && A > C) {
    maiorIdade = A;
} else if (B > A && B > C) {
    maiorIdade = B;
} else {
    maiorIdade = C;
}

// Exibe a idade do filho mais velho
console.log(maiorIdade);
