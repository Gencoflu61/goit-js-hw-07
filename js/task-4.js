const form = document.querySelector('.login-form');
form.addEventListener('submit', function(event) {
    //Sayfanın yeniden yüklenmesini engeller
    event.preventDefault();
    const email = form.querySelector('input[name="email"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();
    
    if(email === '' || password === ''){
        return alert("'All form fields must be filled in'");
    }

    const formData = {
        email    : email,
        password : password,
    }
    
    //Form verilerini konsola yazdır
    console.log(formData);
    //Formu temizle
    this.reset();
});