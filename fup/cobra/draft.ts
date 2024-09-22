let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let dimensao: number = +input();
let x: number = +input();
let y: number = +input();
let direcao: string = input();
let seg: number = +input();

for (let i = 0; i < seg; i++) {
    if (direcao == "U") {
        if (y < 0) {
            y = dimensao - 1;
        }
        y--;
    } else if (direcao == "D") {
        if (y > dimensao - 1) {
            y = 0;
        }
        y++;
    } else if (direcao == "R") {
        if (x > dimensao - 1) {
            x = 0;
        }
        x++;
    } else if (direcao == "L") {
        if (x < 0) {
            x = dimensao - 1;
        }
        x--;
    }
}

write( x + " " + y);
