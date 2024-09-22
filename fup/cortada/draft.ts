let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let B: number = +input();  // Distância do ponto inicial do corte na base
let T: number = +input();  // Distância do ponto final do corte no topo

// Tamanho total da nota
const altura: number = 70;
const comprimento: number = 160;

// Calcula as áreas dos dois pedaços
let areaFelix: number = ((B + T) * altura) / 2;
let areaTotal: number = comprimento * altura;
let areaMarzia: number = areaTotal - areaFelix;

// Verifica quem ficou com o pedaço que vale 100 reais ou se nenhum tem valor
if (areaFelix > areaTotal / 2) {
    console.log(1);  // Felix ficou com o pedaço que vale 100 reais
} else if (areaMarzia > areaTotal / 2) {
    console.log(2);  // Marzia ficou com o pedaço que vale 100 reais
} else {
    console.log(0);  // O valor da nota se perdeu
}
