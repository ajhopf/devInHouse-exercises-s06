const sleep = valor => {
  return new Promise((res, rej) => {
    setTimeout(() => console.log(valor), 3000);
  });
};

sleep('olá');
sleep(200);
sleep(true);
