let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let prof:number = +input()
let salto:number = +input()
let escorrega:number = +input()

let sapo:number = 0;

while(sapo <= prof ){
    let saida: string = sapo + " " ;
    sapo += salto;

    if( sapo >= prof){
        saida +=  "saiu"
        console.log(saida)
        break;
    } else {
        saida += sapo;
        console.log( saida)
        sapo -= escorrega
        
    }

}

