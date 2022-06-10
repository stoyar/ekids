const millionButton = document.querySelector('.million-button');

const moveButton = () => {
  millionButton.setAttribute('focused', `none`);
  const parent = millionButton.parentElement;
  const width = Math.floor(Math.random() * parent.offsetWidth);
  const height = Math.floor(Math.random() * parent.offsetHeight);
  millionButton.setAttribute('style', `top: ${height}px; left: ${width}px`);
}

const hackerDetected = () => {
  millionButton.remove();
  alert('Хакер обнаружен! Пожалуйста, оставайтесь на месте, за вами выехали ;)')
}

millionButton.addEventListener('pointerover', moveButton);
millionButton.addEventListener('pointerenter', moveButton);
millionButton.addEventListener('focus', moveButton);
millionButton.addEventListener('click', hackerDetected);