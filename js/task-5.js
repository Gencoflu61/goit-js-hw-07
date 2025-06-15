function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  console.log(`Renk: ${randomColor}`);
  
  // Body arka plan rengini değiştir (hex formatında)
  document.body.style.backgroundColor = randomColor;
  
  // Span içine hex rengi yaz
  colorSpan.textContent = randomColor;
});