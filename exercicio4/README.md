O sistema de uma empresa, após efetuar a venda, chama funções remotas de duas empresas de entrega dos pedidos, e aquela que responder mais rápido nossa requisição fica responsável pela entrega.

O retorno das chamadas foram adicionados nas constantes abaixo: 'retornoEmpresa1' e 'retornoEmpresa2'.

Usando 'Promise.race()', recupere o valor da promise da empresa vencedora e imprima o resultado.

const retornoEmpresa1 = new Promise( (resolve, reject) =>
setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) =>
setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

// ... continue daqui ....
