
const alunos = ['joão', 'felipe', 'marcela', 'patrícia', 'josé'];
const notas = [7.5, 4.6, 7, 9, 6.3];

// listaDeNotasDosAlunos[0],  listaDeNotasDosAlunos[1] 

let listaDeNotasDosAlunos = [alunos, notas];

const mostraNomeENotaDoAluno = (nomeDoAluno) => {

    //                          includes() method retuns boolean
    if (listaDeNotasDosAlunos[0].includes(nomeDoAluno)) {
        // it will always be necessary to create a new array of arrays to make this search?
        // acho que sim, porque eu coloco um novo índice pra "forçar" o programa a buscar todos os elementos desse array
        let indice = listaDeNotasDosAlunos[0].indexOf(nomeDoAluno);
                                            //  indexOf retuns the 
        return listaDeNotasDosAlunos[0][indice] + ` a média do aluno é ` + listaDeNotasDosAlunos[1][indice];
    } else {                    //  [0][3] retorna o elemento que está na nesta posição da matriz!!!!  
        console.log("Aluno não cadastrado.");
    }
}

console.log(mostraNomeENotaDoAluno('patrícia'))
