let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num1: number = +input()
let num2: number = +input()
let num3: number = +input()
let meio: number = 0;

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    meio = num1;

} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    meio = num2;
} else {
    meio = num3;
}

console.log(meio);