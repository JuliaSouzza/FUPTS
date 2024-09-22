let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let atual: number = +input();
let aumento: number = 0;

    if(atual <= 1000.00){
        aumento = atual * 0.20
    } 
    else if (atual <= 1500.00){
        aumento = atual * 0.15
    }
    else if(atual <=  2000.00){
        aumento = atual * 0.10
    } else {
        aumento = atual * 0.05
    } 

    let novo = aumento + atual;

    console.log(novo.toFixed(2))




