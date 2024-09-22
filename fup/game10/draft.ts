let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let N: number = +input()
let D: number = +input()
let A: number = +input()
let resp: number = 0;
if(A == D){
    resp = 0;
} else if (A < D){
    resp = D - A;
} else if(A > D) {
    resp = (N - A) + 1 + (D - 1)
}

console.log(resp)