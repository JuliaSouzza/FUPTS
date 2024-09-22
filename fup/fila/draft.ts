let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function organizarFila(quantidade: number, fila: number[]): void {
    let impares: number[] = [];
    let pares: number[] = [];

    // Separar ímpares e pares
    for (let pessoa of fila) {
        if (pessoa % 2 === 0) {
            pares.push(pessoa);
        } else {
            impares.push(pessoa);
        }
    }

    // Imprimir ímpares
    console.log(`[ ${impares.join(" ")} ]`);

    // Imprimir pares
    console.log(`[ ${pares.join(" ")} ]`);
}

// Entrada
let quantidade: number = +input(); // Receber a quantidade de pessoas
let fila: number[] = input().split(" ").map(Number); // Receber a fila de números

