let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let linha = input().split(" ");
let num1 = +linha[0];
let num2 = +linha[1];

write ("[ ", "");
for (let i = num1; i < num2; i++) {
if (i % 2 == 0){
continue;
}
write (i, " ");
}
write ("]");


