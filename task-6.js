// Rastgele HEX renk kodu üreten fonksiyon
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// DOM elementlerini seçiyoruz
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Kutu oluşturma fonksiyonu
function createBoxes(amount) {
  // Önce mevcut kutuları temizle
  destroyBoxes();
  
  const boxes = []; // Oluşturulacak kutuları saklayacağımız dizi
  let size = 30; // Başlangıç boyutu (30px)
  
  // Belirtilen miktarda kutu oluştur
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    // Kutu stil ayarları
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); // Rastgele renk
    box.style.margin = '5px'; // Kutular arası boşluk
    boxes.push(box); // Diziye ekle
    size += 10; // Her kutu için boyutu 10px artır
  }
  
  // Tüm kutuları tek seferde DOM'a ekle (performans için)
  boxesContainer.append(...boxes);
}

// Kutuları temizleme fonksiyonu
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Container içini boşalt
}

// Oluştur butonu event listener'ı
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value); // Input değerini sayıya çevir
  
  // Giriş doğrulama (1-100 arası)
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Kutuları oluştur
    input.value = ''; // Input'u temizle
  } else {
    alert('Lütfen 1 ile 100 arasında bir sayı girin!');
  }
});

// Temizle butonu event listener'ı
destroyBtn.addEventListener('click', destroyBoxes);