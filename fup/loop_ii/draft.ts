let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista = input().split(" ")
let num1 = lista[0]
let num2 = lista[1]

let p = "[ ";

for (let i = num1; i > num2; i++) {
    p += i + " "; // Adiciona cada número seguido de um espaço
}

p += "]"; // Adiciona o colchete de fechamento

console.log(p.trim()); 