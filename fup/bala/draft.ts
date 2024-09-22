let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let xa: number = +input()
let ya: number = +input()
let xb: number = +input()
let yb: number = +input()

let deltaX: number = (xa - xb)
let deltaY: number = (ya - yb)

let distancia: number = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

console.log(distancia.toFixed(2))

