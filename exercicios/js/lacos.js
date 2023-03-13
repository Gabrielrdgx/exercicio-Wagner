//média de 3 notas
//prompt interage com o usuario
let nota1 = parseFloat(prompt ('infome a nota 1:'))
let nota2 = parseFloat(prompt ('infome a nota 2:'))
let nota3 = parseFloat(prompt ('infome a nota 3:'))

let media = (nota1 + nota2 + nota3)/3;
//document.write('A média é: '+ media)
alert('A média é: '+ media)

if (media >= 7.0){
    alert('parabens voce foi aprovado');
    document.write('<img src="images/aprovado.jpg" alt "Deu ruim">')
}
else if (media >= 5) {
    alert('recuperação continua')
}
else{
    alert('reprovado bobão');
    document.write('<img src="images/reprovado.jpg" alt "Deu ruim">')
} 