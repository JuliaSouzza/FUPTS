let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let chicoBento: number = +input();
let cebolinha: number = +input();
let qtdAnimais: number = +input();
let totalPatas: number = 0;

let i: number = 0;

while (i < qtdAnimais) {
  let animal: string = input();
  if (animal == "v" || animal == "c") {
    totalPatas += 4;
  } else {
    totalPatas += 2;
  }
  i++;
}

console.log(totalPatas);

let absChico: number = Math.abs(totalPatas - chicoBento);
let absCebolinha: number = Math.abs(totalPatas - cebolinha);

if (absChico == absCebolinha) {
  console.log("empate")
} else if (absChico > absCebolinha) {
  console.log("Cebolinha")
} else {
  console.log("Chico Bento")
}

// chico 17 - erraram por 1 = 16 - 17 = -1
// cebolinha 15 - erraram por 1 = 16 - 15 = 1 
// Math.abs() = calcula a distância de um para o outro 