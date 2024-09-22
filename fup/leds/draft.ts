let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let led: number[] = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
let n: number = +input()

for(let i = 0; i < n; i ++){
    let valor: string = input()
    let total: number = 0;

    for (let char of valor) {
        total += led[+char]; // Adiciona LEDs para cada dígito
    }

    console.log(`${total} leds`);
}
