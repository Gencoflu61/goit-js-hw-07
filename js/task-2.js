const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Galeri container'ını seçiyoruz
const gallery = document.querySelector(".gallery");
// Her resim için bir galeri öğesi oluşturuyoruz
const galleryItems = images.map(image => {
  return `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
 
});
  
// Tüm öğeleri tek seferde galeriye ekliyoruz
gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));
