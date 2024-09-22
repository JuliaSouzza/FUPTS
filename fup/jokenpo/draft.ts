let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let jog1: string = input( ); 
let jog2: string = input( ); 

if (jog1 === jog2) {
    console.log("empate");
} else if (
    (jog1 === "R" && jog2 === "S") ||
    (jog1 === "S" && jog2 === "P") ||
    (jog1 === "P" && jog2 === "R")
) {
    console.log("jog1");
} else {
    console.log("jog2");
}
