function pegarDados() {
  let iconeAberto = document.querySelector('.aberto');
  const informacoesDadosDate = new Date('1/23/2024 22:00:00 GMT-3');
  const dia = informacoesDadosDate.getDay();
  const hora = informacoesDadosDate.getHours();
  verificacaoHorario(iconeAberto, dia, hora);
}

function verificacaoHorario(iconeAberto, dia, hora) {
  const diaVerificacao = dia >= 1 && dia <= 6;
  const horaVerificacao = hora >= 7 && hora < 18;

  if (!diaVerificacao || !horaVerificacao) {
    iconeAberto.style.backgroundColor = "red";
    iconeAberto.setAttribute("title", "Fechado");
  } else {
    iconeAberto.setAttribute("title", "Aberto");
  }
}

function initVerificacaoHorario() {
  pegarDados();
}

initVerificacaoHorario();