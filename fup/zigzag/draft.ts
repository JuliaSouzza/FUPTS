let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let inicio: number = +input()
let fim: number = +input()

for(let i = inicio; i <= fim; i++){
  if ( i % 5 == 0 && i % 3 == 0) {
    write("zigzag");
  } else if ( i % 3 == 0) {
     write("zig");
  } else if ( i % 5 == 0) {
    write("zag")
  } else {
    write(i);
  }
}
