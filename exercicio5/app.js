function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
  });
}

async function processar() {
  // obterClienteNoBancoDeDados(7).then(cliente => console.log(cliente));
  const cliente = await obterClienteNoBancoDeDados(7);
  console.log(cliente);
}

processar();
