const divRelogio = document.querySelector('.relogio');

const atualizaHora = () => {
  const horarioAtual = new Date();

  const horaAtual = horarioAtual.getHours();
  const minutoAtual = horarioAtual.getMinutes();
  const segundoAtual = horarioAtual.getSeconds();

  divRelogio.innerHTML = '';
  divRelogio.innerHTML = `${horaAtual < 10 ? '0' + horaAtual : horaAtual}:${
    minutoAtual < 10 ? '0' + minutoAtual : minutoAtual
  }:${segundoAtual < 10 ? '0' + segundoAtual : segundoAtual}`;
};

atualizaHora();

setInterval(atualizaHora, 2000);
