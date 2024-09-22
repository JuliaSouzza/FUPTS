let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let hora: number = +input()
let minuto: number = +input()
let dia: number = +input()
let mes: number = +input()
let ano: number = +input()

console.log(`${hora}:${minuto} ${dia}/${mes}/${ano}`);
