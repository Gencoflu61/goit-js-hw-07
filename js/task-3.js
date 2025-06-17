// Gerekli elementleri seçiyoruz
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Input olayını dinliyoruz
nameInput.addEventListener("input", () => {
  // Giriş değerini alıp başındaki/sonundaki boşlukları temizliyoruz
  const trimmedValue = this.value.trim();
  
  // Eğer değer boşsa veya sadece boşluklardan oluşuyorsa
   nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
})