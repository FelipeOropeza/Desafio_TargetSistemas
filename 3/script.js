fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    fetch("dados.json")
      .then((response) => response.json())
      .then((data) => {
        const faturamentoValido = data.filter((item) => item.valor > 0);

        if (faturamentoValido.length === 0) {
          console.log("Nenhum faturamento válido encontrado.");
          return;
        }

        const menorFaturamento = Math.min(
          ...faturamentoValido.map((item) => item.valor)
        );

        const maiorFaturamento = Math.max(
          ...faturamentoValido.map((item) => item.valor)
        );

        const somaFaturamento = faturamentoValido.reduce(
          (soma, item) => soma + item.valor,
          0
        );
        const mediaMensal = somaFaturamento / faturamentoValido.length;

        const diasAcimaDaMedia = faturamentoValido.filter(
          (item) => item.valor > mediaMensal
        ).length;

        alert(
          `Menor valor de faturamento: ${menorFaturamento}\n` +
            `Maior valor de faturamento: ${maiorFaturamento}\n` +
            `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
        );
      })
      .catch((error) => {
        console.error("Erro ao carregar o JSON:", error);
      });
  })
  .catch((error) => {
    console.error("Erro ao carregar o JSON:", error);
  });
