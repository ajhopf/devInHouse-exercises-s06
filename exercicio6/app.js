const procuraIdadeMediaNoBrasil = async nome => {
  try {
    const nomeEmLowerCase = nome.toLowerCase();
    const response = await fetch(
      `https://api.agify.io/?country_id=BR&name=${nomeEmLowerCase}`
    );
    const resultado = await response.json();

    const nomeCapitalized =
      nomeEmLowerCase[0].toUpperCase() + nomeEmLowerCase.slice(1);

    console.log(
      `A idade média no Brasil das pessoas com o nome de ${nomeCapitalized} é de ${resultado.age} anos.`
    );
  } catch (error) {
    console.log(error);
  }
};

procuraIdadeMediaNoBrasil('André');
procuraIdadeMediaNoBrasil('rachel');
procuraIdadeMediaNoBrasil('luiz');
