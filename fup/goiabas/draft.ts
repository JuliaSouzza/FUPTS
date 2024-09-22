let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let cestas: number = +input()
let f1: number = +input()
let f2: number = +input()
let f3: number = +input()

let qtdF = f1 + f2 + f3;
let minutos: number = 0;

if(cestas >= qtdF){
    minutos += 1;
} else {
    minutos = (qtdF / cestas)
}

console.log(Math.ceil(minutos))