function count(vet: number[], value: number): number {
    let contador: number = 0;

    for (let elem of vet) {
        if (elem == value) {
            contador++;
        }
    } 
    return contador;
}

function sum(vet: number[]): number {
    let soma: number = 0;

    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return soma;

}

function average(vet: number[]): number {
    return sum(vet)/vet.length;
}

function more_men(vet: number[]): string {
    let contadorHomens: number = 0;
    let contadorMulheres: number = 0;

    for (let elem of vet) {
        if (elem > 0) {
            contadorHomens ++;
        } else  {
            contadorMulheres++
        }
    }

    if (contadorHomens > contadorMulheres) {
        return "men";
    } if (contadorHomens < contadorMulheres) {
        return "women";
    } return "draw";

}


function half_compare(vet: number[]): string {
    let metade1: number[] = vet.slice(0, vet.length/2);
    let metade2: number[] = vet.slice(vet.length/2, vet.length);

    let somaMetade1 = sum(metade1);
    let somaMetade2 = sum(metade2);

    if (somaMetade1 > somaMetade2) {
        return "first";
    } if (somaMetade1 < somaMetade2) {
        return "second";
    } return "draw";
}

function sex_battle(vet: number[]): string {
    let homens: number[] = [];
    let mulheres: number[] = [];

    for (let elem of vet) {
        if (elem > 0) {
            homens.push(elem);
        } else {
            mulheres.push(elem);
        }
    }

    let mediaHomens: number = average(homens);
    let mediaMulheres: number = average(mulheres);

    if (mediaHomens > mediaMulheres) {
        return "men";
    } if (mediaHomens < mediaMulheres) {
        return "women";
    } return "draw";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };