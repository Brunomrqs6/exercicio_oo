function Aluno(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.apresentacao = function() {
        console.log(`Olá, ${nome}, você tem ${idade} anos.`)
    }
}

function Aluno1(nome, idade, nota1, nota2) {
    this.nota1 = nota1;
    this.nota2 = nota2;

    Aluno.call(this, nome, idade);

    this.somaNotas = function() {
        const media = (nota1 + nota2) / 2
        console.log(`Sua média foi de ${media}`)
    }
}

function Aluno2(nome, idade, nota1, nota2) {
    this.nota1 = nota1;
    this.nota2 = nota2;

    Aluno.call(this, nome, idade);
    
    this.somaNotas = function() {
        const media = (nota1 + nota2) / 2
        console.log(`Sua média foi de ${media}`)
    }
}



const aluno = new Aluno('Matheus');
const aluno1 = new Aluno1('Matheus', 19, 8, 7);
const aluno2 = new Aluno2('Bruno', 18, 6, 5);

aluno1.apresentacao();
aluno1.somaNotas();
aluno2.apresentacao();
aluno2.somaNotas();






