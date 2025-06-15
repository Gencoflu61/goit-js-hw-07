// Gerekli elementleri seçiyoruz
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Input olayını dinliyoruz
nameInput.addEventListener('input', function() {
  // Giriş değerini alıp başındaki/sonundaki boşlukları temizliyoruz
  const trimmedValue = this.value.trim();
  
  // Eğer değer boşsa veya sadece boşluklardan oluşuyorsa
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});