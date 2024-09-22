let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let texto: string = input(); 
let indice: number = +input(); 
let quantidade: number = +input(); 


if (indice < 0 || indice >= texto.length) {
    console.log("");
} else {
    
    let substring: string = texto.substring(indice, Math.min(indice + quantidade, texto.length));
    console.log(substring); // Imprimir a substring
}
