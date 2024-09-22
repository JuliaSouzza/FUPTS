let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = +input()
let b: number = +input()
let c: number = +input()
let h: number = +input()
let l: number = +input()

if(a <= h && b <= l || b <= h && a <= l){
    console.log( "S")
} else if (a <= h && c <= l || c <= h && a <= l ){
    console.log("S")
} else if (b <= h && c <= l || c <= h && b <= l ){
    console.log("S")
} else {
    console.log("N")
}


