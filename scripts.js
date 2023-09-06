let isDarkMode = false;

const colorMode = document.querySelector('#toggle-mode');
const hoursContainer = document.querySelector('#hour');
const dateContainer = document.querySelector('#date');

const updateDateHour = () => {
    const date = new Date()
    const day = date.getDate();
    const month = date.getMonth() + 1;
    let minute = date.getMinutes();
    let hour = date.getHours();
    let second = date.getSeconds();

    const secondsHand = document.querySelector('#seconds');
    const minutesHand = document.querySelector('#minutes');
    const hoursHand = document.querySelector('#hours');

    hoursContainer.textContent = `${hour}:${minute}`
    dateContainer.textContent = `${day}, ${month}`
    secondsHand.style.transform = `rotate(${second * 6}deg)`;
    minutesHand.style.transform = `rotate(${minute * 6}deg)`;
    hoursHand.style.transform = `rotate(${hour * 30}deg)`;
}

colorMode.addEventListener('click', () => {
    const minutesHand = document.querySelector('#minutes');
    const hoursHand = document.querySelector('#hours');
    isDarkMode = !isDarkMode
    if(document.body.classList.contains('light')){
        document.body.classList = 'dark';
        colorMode.innerHTML = '<i class="fa-regular fa-sun fa-xl" style="color: #000000;"></i>';
        minutesHand.style.backgroundColor = 'white';
        hoursHand.style.backgroundColor = 'white';
    }else{
        document.body.classList = 'light';
        colorMode.innerHTML = '<i class="fa-solid fa-moon fa-2xl" style="color: #000000;"></i>';
        minutesHand.style.backgroundColor = 'black';
        hoursHand.style.backgroundColor = 'black';
    }
})

updateDateHour();
const timeInterval = setInterval(updateDateHour, 1000)