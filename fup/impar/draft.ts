let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let P: number = +input();  //q 0: Alice gritou "par", 1: Bob gritou "par"
let D_1: number = +input(); // Número de dedos estendidos por Alice
let D_2: number = +input(); // Número de dedos estendidos por Bob

// Soma dos dedos estendidos por Alice e Bob
let soma: number = D_1 + D_2;

// Se a soma for par e P = 0 (Alice escolheu "par") ou a soma for ímpar e P = 1 (Bob escolheu "par")
if ((soma % 2 === 0 && P === 0) || (soma % 2 !== 0 && P === 1)) {
    console.log(0); // Alice ganha
} else {
    console.log(1); // Bob ganha
}
