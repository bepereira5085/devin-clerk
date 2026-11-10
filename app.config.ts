export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "EasyMoney",
  description: "Um aplicativo de gestão financeira de gastos pessoais.",
  emoji: "💰",
  accent: "#059669",
  upcomingFeatures: [
    {
      title: "Registrar entradas e saídas",
      description:
        "Formulário para lançar um valor recebido ou gasto, com data e observação.",
    },
    {
      title: "Etiquetas nos lançamentos",
      description:
        "Crie tags como Alimentação, Transporte ou Aluguel e atribua uma a cada lançamento.",
    },
    {
      title: "Histórico de lançamentos",
      description:
        "Lista dos lançamentos com filtro por tag e mês, com opção de editar ou excluir.",
    },
    {
      title: "Resumo do mês",
      description:
        "Cards com o total de entradas, o total de saídas e o saldo do mês.",
    },
    {
      title: "Gastos por tag",
      description:
        "Gráfico de pizza mostrando como os gastos se dividem entre as tags.",
    },
    {
      title: "Entradas vs. saídas",
      description:
        "Gráfico de barras comparando entradas e saídas dos últimos 6 meses.",
    },
  ] satisfies Feature[],
};
