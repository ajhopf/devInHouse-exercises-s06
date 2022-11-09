const userList = document.querySelector('#userList');
const form = document.querySelector('#form');

const randomUserGenerator = async numberOfUsers => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${numberOfUsers}`
    );
    const data = await response.json();

    data.results.forEach(user => {
      userList.appendChild(criaUserListItem(user));
    });
  } catch (error) {
    console.log(error);
  }
};

const criaUserListItem = user => {
  const li = document.createElement('li');

  const divImage = document.createElement('div');
  divImage.classList.add('listImage');
  const divText = document.createElement('div');
  divText.classList.add('listText');

  //imagem
  const img = document.createElement('img');
  img.setAttribute('src', `${user.picture.large}`);
  divImage.appendChild(img);
  li.appendChild(divImage);
  //nome
  const nome = document.createElement('h2');
  nome.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  divText.appendChild(nome);
  //email
  const email = document.createElement('p');
  email.innerText = user.email;
  divText.appendChild(email);
  //endereço
  const address = document.createElement('p');
  address.innerText = `${user.location.street.name} - ${user.location.street.number} / ${user.location.city} - ${user.location.state} - ${user.location.country} `;
  divText.appendChild(address);

  li.appendChild(divText);
  return li;
};

form.addEventListener('submit', event => {
  event.preventDefault();
  userList.innerHTML = '';
  const selectedValue = parseInt(event.target.quantidade.value);

  randomUserGenerator(selectedValue);
});
