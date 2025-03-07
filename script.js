document.getElementById('switch').addEventListener('change', function() {
    toggleThemeMode()
})

const toggleThemeMode = () => {

    let themeMode = localStorage.getItem('theme');
    let logoImage = document.getElementById('logo-image');
    let appStoreImage = document.getElementById('app-store-image');
    let googlePlayImage = document.getElementById('google-play-image');
    
 
    if (themeMode === 'dark') 
    {
        /*logoImage.src = "images/logo-light.png";*/
        appStoreImage.src = "images/appstore-light.svg"
        googlePlayImage.src = "images/googleplay-light.svg"
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    }
    else
    {
        /*logoImage.src = "images/logo-dark.png";*/
        appStoreImage.src = "images/appstore-dark.svg"
        googlePlayImage.src = "images/googleplay-dark.svg"
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

