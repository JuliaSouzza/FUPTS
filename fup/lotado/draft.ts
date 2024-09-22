let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c: number = +input()
let estado: number = 0;

while(true){
    let m: number = +input()
    estado += m;
    if(estado == 0){
        console.log("vazio")
    } else if (estado > 0 && estado < c){
        console.log("ainda cabe")
    } else if (estado >= c && estado < c * 2){
        console.log("lotado")
    } else if(estado >= c * 2) {
        console.log("hora de partir")
        break;
    }

}


//se declarar a variavel dentro do laço ela é lida varias vezes do contrario 
//ela só é lida uam unica vez e não consdiz com a rotatividade do laço

