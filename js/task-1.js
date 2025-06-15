document.addEventListener('DOMContentLoaded', function() {
// 1. Kategoriler listesini seçiyoruz
const categoriesList = document.getElementById('categories');
// 2. Kategori sayısını bulup ekrana yazdırıyoruz
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Toplam kategori sayisi: ${categoryItems.length}`);
// 3. Her bir kategori için işlem yapıyoruz
categoryItems.forEach(item => {
   // a) Kategori başlığını alıyoruz (h2 etiketi)
   const categoryTitle = item.querySelector('h2').textContent;
    // b) Kategorideki öğe sayısını hesaplıyoruz (iç <li>ler)
    const categoryElements = item.querySelectorAll('li');
    const elementCount = categoryElements.length;
    // c) Bilgileri konsola yazdırıyoruz
    console.log(`Kategori: ${categoryTitle}`);
    console.log(`Öğe sayisi: ${elementCount}`);

});
});