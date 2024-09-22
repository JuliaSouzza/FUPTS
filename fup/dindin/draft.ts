let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = +input();

let qtdChoc: number = 0;
let qtdLim: number = 0;
let qtdManha: number = 0;
let qtdTarde: number =0;

while(qtd > 0 ){
  let entrada: string[] = input().split(" ");
  let sabor: string = entrada[0];
  let turno: string = entrada[1];

  if(sabor == "c" ){
    qtdChoc += 1;
  } else if (sabor == "l"){
    qtdLim += 1;
  } 
  
  if (turno == "m" ){
    qtdManha += 1;
  } else if (turno == "t"){
    qtdTarde += 1;
  }

  qtd --;
  
}

let saborVencedor: string = "";
let turnoVago: string = "";

if( qtdChoc > qtdLim){
  saborVencedor = "c";
} else if ( qtdChoc == qtdLim ){
  saborVencedor = "empate";
} else {
  saborVencedor = "l";
}

if( qtdManha < qtdTarde){
  turnoVago = "m";
} else if ( qtdManha == qtdTarde ){
  turnoVago = "empate";
} else {
  turnoVago = "t";
}

console.log( saborVencedor + ("\n") +  turnoVago)
