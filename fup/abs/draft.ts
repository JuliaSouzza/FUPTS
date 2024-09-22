let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [num1, num2] = input().split(" ").map(Number);

// Calcular a diferença entre os dois números
let diferenca: number = num1 - num2;

// Calcular o valor absoluto da diferença
if (diferenca < 0) {
  diferenca = -diferenca;  // Se for negativo, torna positivo
}

// Imprimir o valor absoluto da diferença
console.log(diferenca);