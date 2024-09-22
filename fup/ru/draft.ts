let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let frase: string = input(); 

let vogais = frase.replace(/[^aeiou]/g, '').replace(/\s/g, '');
let consoantes = frase.replace(/[aeiou\s]/g, '');

console.log(vogais);    
console.log(consoantes);

