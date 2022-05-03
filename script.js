const inputText = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

button.addEventListener('click', () => {
  const words = inputText.value.split(' ');
  paragraph.innerHTML = '';
  if (inputText.value.trim().length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = words[i];
      paragraph.appendChild(span);
    }
  }
});
