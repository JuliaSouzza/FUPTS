let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nota1: number = +input();
let nota2: number = +input();
let media = (nota1 + nota2) / 2;

if(media >= 7){
    console.log("aprovado");
} else if(media < 4){
    console.log("reprovado");
} else {
    let mediaFinal: number = +input();
    let resultado = (media + mediaFinal) / 2;

    if(resultado >= 5){
        console.log("aprovado na final")
    } else {
        console.log("reprovado na final")
    }
}





