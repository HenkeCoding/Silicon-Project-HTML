document.getElementById('switch').addEventListener('change', function() {
    toggleThemeMode()
})

const toggleThemeMode = () => {

    let themeMode = localStorage.getItem('theme');
    let logoImage = document.getElementById('logo-image');
 
    if (themeMode === 'dark') 
    {
        /*logoImage.src = "images/log.png";*/
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    } 
    else 
    {
        /*logoImage.src = "images/logo-dark.png";*/
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
    }
}



document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    if(e.target[email].value === "") {
        alert('Please enter your email address')
        return;
    }

    const emailrequest = {
        email: e.target[email].value
    }



    let email = document.getElementById('email').value;
    console.log(email);
    document.getElementById('email').value = '';
    alert('Thank you for subscribing')
})

