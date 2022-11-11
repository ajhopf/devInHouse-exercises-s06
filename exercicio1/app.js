const sleep = valor => {
  return new Promise((res, rej) => {
    setTimeout(() => res(valor), 3000);
  });
};

sleep('olá').then(resultado => console.log(resultado));
