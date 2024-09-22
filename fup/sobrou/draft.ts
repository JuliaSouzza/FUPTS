let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let p1: number = +input()
let p2: number = +input()
let p3: number = +input()

let v1: number = +input()
let v2: number = +input()
let v3: number = +input()
let qtdD: number = +input()

let conta: number = (p1 * v1) + (p2 * v2) + (p3 * v3);

let troco = qtdD - conta

console.log(troco.toFixed(2))