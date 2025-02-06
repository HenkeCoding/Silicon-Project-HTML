const toggleThemeMode = () => {
    console.log("sup!");
    document.body.classList.toggle('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
    
    }
