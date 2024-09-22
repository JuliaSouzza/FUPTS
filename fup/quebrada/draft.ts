let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num1: number = +input()
let num2: number = +input()

let d = Math.floor(num1 / num2)
let resto = num1 % num2;
let divisao = (num1 / num2).toFixed(2);

console.log(d + "\n" + resto + "\n" + divisao )
