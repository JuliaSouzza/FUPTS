let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


function arredondar_nota (fun: string, nota: number): number{
    if (fun == "c"){
      let cima: number = +input();
      cima = Math.ceil(nota);
      return (cima);
    } else if (fun == "f"){
        let baixo: number = +input();
        baixo = Math.floor(nota);
        return (baixo);
    } else {
        let arredondada: number = +input();
        arredondada = Math.round(nota);
        return (arredondada);
    }
  }
  
  let fun: string = input();
  let nota: number = +input();
  
  console.log(arredondar_nota(fun, nota));

  
