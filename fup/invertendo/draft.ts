let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function inverterVetor(qtd: number, vetor: number[]): number[] {
    // Inverte o vetor
    let vetorInvertido: number[] = [];
    for (let i = qtd - 1; i >= 0; i--) {
        vetorInvertido.push(vetor[i]);
    }
    return vetorInvertido;
}

// Entrada
let qtd: number = +input(); // quantidade de elementos
let vetor: number[] = input().split(" ").map(Number); // vetor de elementos

// Processamento
let resultado = inverterVetor(qtd, vetor);

// Saída formatada
write("[ ", "");
for (let i = 0; i < resultado.length; i++) {
    if (i != 0) {
        write(" ", "");
    }
    write(resultado[i], "");
}
write(" ]");