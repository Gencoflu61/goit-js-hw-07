const form = document.querySelector(".login-form");

form.addEventListener("submit", (event)=> {
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
    
    console.log(formData);

    form.reset();
});