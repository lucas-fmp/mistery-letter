const inputText = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function randomClass() {
  const style = styleGroup[Math.floor(Math.random() * styleGroup.length)];
  const size = sizeGroup[Math.floor(Math.random() * sizeGroup.length)];
  const rotation = rotationGroup[Math.floor(Math.random() * rotationGroup.length)];
  const inclination = inclinationGroup[Math.floor(Math.random() * inclinationGroup.length)];
  const Classes = `${style} ${size} ${rotation} ${inclination}`;
  return Classes;
}

button.addEventListener('click', () => {
  const words = inputText.value.split(' ');
  paragraph.innerHTML = '';
  if (inputText.value.trim().length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = words[i];
      span.className = randomClass();
      paragraph.appendChild(span);
    }
  }
  for (let index = 0; index < paragraph.childNodes.length; index += 1) {
    paragraph.childNodes[index].addEventListener('click', (event) => {
      event.target.className = randomClass();
    });
  }
  document.querySelector('#carta-contador').innerText = paragraph.childElementCount;
});

for (let index = 0; index < paragraph.childNodes.length; index += 1) {
  paragraph[index].addEventListener('click', (event) => {
    console.log(event.target);
    const selectedSpan = event.target;
    selectedSpan.className = randomClass();
  });
}
