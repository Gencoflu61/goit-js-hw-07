document.querySelector('.login-form').addEventListener('submit', function(event) {
    //Sayfanın yeniden yüklenmesini engeller
    event.preventDefault();
    //Form elemanlarını alır
    const forElements = this.elements;
    const formData = {};
    let hasEmptyField =false;

    //Tüm input alanlarını kontrol eder
    for (let element of forElements) {
        if(element.nodeName === 'INPUT') {
            const value = element.value.trim();
            //Boş alan kontrolü
            if(!value) {
                hasEmptyField = true;
            }
            //Değerleri nesneye ekle (boş ols bile)
            formData[element.name] = value;   
             }
    }
    //Boş alan varsa uyarı ver
    if (hasEmptyField) {
        alert('All form fields must be fiilled in');
        return;
    }
    //Form verilerini konsola yazdır
    console.log(formData);
    //Formu temizle
    this.reset();
});