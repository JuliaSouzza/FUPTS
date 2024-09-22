let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let val1: number = +input();
let val2: number = +input();
let val3: number = +input();

if (val1 === val2 && val1 === val3) {
    console.log("3");
} else if (val1 === val2 || val1 === val3 || val2 === val3) {
    console.log("2");
} else {
    console.log("0");
}

