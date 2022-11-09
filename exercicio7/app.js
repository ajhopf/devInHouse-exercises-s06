const botao = document.querySelector('#button');
const p = document.querySelector('p');

const obtemPrecoBitcoin = async () => {
  const response = await fetch('https://api.coincap.io/v2/assets/bitcoin');
  const data = await response.json();

  console.log(
    `O preço do Bitcon - ${data.data.symbol} - em dólares hoje é $${data.data.priceUsd}`
  );

  p.innerHTML = `O preço do Bitcon - ${data.data.symbol} - em dólares hoje é $${data.data.priceUsd}`;
};

botao.addEventListener('click', obtemPrecoBitcoin);
