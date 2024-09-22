let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = +input()
let b: number = +input()

let soma = a + b;
let subtracao = a - b;
let mult = a * b;
let divisao = a / b;
let resto = a % b;

console.log(soma + ("\n") + subtracao + ("\n") + mult + ("\n") + divisao.toFixed(2) + ("\n") + resto )

