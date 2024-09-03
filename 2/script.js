let num = parseInt(prompt("Digite um  número:"));

let fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] < num) {
  let proximoValor =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximoValor);
}

if (fibonacci.includes(num)) {
  alert(`${num} pertence à sequência de Fibonacci.`);
} else {
  alert(`${num} não pertence à sequência de Fibonacci.`);
}
