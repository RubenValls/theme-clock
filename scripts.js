let isDarkMode = false;

const colorMode = document.querySelector('#toggle-mode');

colorMode.addEventListener('click', () => {
    isDarkMode = !isDarkMode
    if(document.body.classList.contains('light')){
        document.body.classList = 'dark';
    }else{
        document.body.classList = 'light';
    }
})