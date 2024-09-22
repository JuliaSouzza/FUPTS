let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

class Aluno {
    nome: string; 
    idade: number;
    turma: number;

    constructor(nome: string, idade: number, turma : number) {
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
    }
}

let italo = new Aluno("Laiza", 18, 3); //objeto
console.log("Laiza");