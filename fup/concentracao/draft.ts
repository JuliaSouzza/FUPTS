let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista = input().split(" ")
let a = +lista[0]
let b = +lista[1]
let fim = b

let resp = "[ ";
while ( a <= fim) {
  resp += a + " " + b + " ";
  a += 1;
  b -= 1;

}

resp += "]";
console.log(resp)
