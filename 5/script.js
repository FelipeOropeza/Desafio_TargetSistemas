function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

const stringOriginal = prompt("Digite a string que deseja inverter:");

const stringInvertida = inverterString(stringOriginal);

alert(
  `String original: ${stringOriginal}\nString invertida: ${stringInvertida}`
);
