
let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


 let qtd: number = +input();
 let lista: number[] = [];

 for(let i = 0; i < qtd; i++){
//  //quando se lê dentro do laço se lê uma por linha sem precisar de quebra de linha no caso dessa questão
   lista.push(+input())
   console.log(lista[i])
 }
