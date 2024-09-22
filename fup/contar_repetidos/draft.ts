let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//obs= sem o +inp... qaundo se utiliza uma lista
//map percorre todo o vetor e transforma cada um
// let [x, n]:number[] = input().split(" ").map(Number); (outra forma)

let entrada: number[] = input().split(" ").map(Number);
let x = entrada[0];
let n = entrada[1];

let contador: number = 0;

for(let i = 0; i < n; i++){
    let entrada:number = +input();
    if(entrada == x){
        contador += 1;
    }  

}

console.log(contador)





