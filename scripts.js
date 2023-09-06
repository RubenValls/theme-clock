let isDarkMode = false;
const date = new Date()
const day = date.getDate();
const month = date.getMonth() + 1;
let minute = date.getMinutes();
let hour = date.getHours();


const colorMode = document.querySelector('#toggle-mode');
const hoursContainer = document.querySelector('#hour');
const dateContainer = document.querySelector('#date');

const updateDateHour = () => {
    hoursContainer.textContent = `${hour}:${minute}`
    dateContainer.textContent = `${day}, ${month}`
}

colorMode.addEventListener('click', () => {
    isDarkMode = !isDarkMode
    if(document.body.classList.contains('light')){
        document.body.classList = 'dark';
        colorMode.innerHTML = '<i class="fa-regular fa-sun fa-xl" style="color: #000000;"></i>'
    }else{
        document.body.classList = 'light';
        colorMode.innerHTML = '<i class="fa-solid fa-moon fa-2xl" style="color: #000000;"></i>';
    }
})

updateDateHour();