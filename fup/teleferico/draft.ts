let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let C: number = +input()
let A: number = +input()
let resp: number = 0;

if(A % (C -1) == 0){
   resp = A / (C -1 )
} else {
    resp = A / (C-1) + 1;
}

console.log(Math.floor(resp))