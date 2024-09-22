let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let s = +input()

let hora = Math.trunc(s/3600)
let min = Math.trunc((s%3600)/60)
let seg = (s % 3600) % 60

let resp = `${hora}:${min}:${seg}`;
console.log(resp)