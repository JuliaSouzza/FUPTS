let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let valor = +input()
let qtd = +input()
let juros = (qtd - 1) * 5

let total = valor + valor * (juros /100)
let parcela = total / qtd

console.log(parcela.toFixed(2) + "\n" + total.toFixed(2))

