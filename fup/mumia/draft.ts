let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nome: string = input();
let idade: number = +input();

if(idade < 12){
    console.log(nome + " " + "eh crianca")

} else if(idade >= 12 && idade < 18){
    console.log(nome + " " + "eh jovem")
} else if(idade >= 18 && idade < 65){
    console.log(nome + " " + "eh adulto")
} else if(idade >= 65 && idade < 1000){
    console.log(nome + " " + "eh idoso")
} else{
    console.log(nome + " " + "eh mumia")
}

