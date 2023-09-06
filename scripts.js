const generalDate = new Date();
let isDarkMode = false;

const colorMode = document.querySelector('#toggle-mode');
const hoursContainer = document.querySelector('#hour');
const dateContainer = document.querySelector('#date');

const getMonthName = (monthNumber) => {
    generalDate.setMonth(monthNumber - 1);
    return generalDate.toLocaleString([], { month: 'short' });
}

const getDayName = () => {
    return generalDate.toLocaleDateString([], {weekday: 'long'});
}

const updateDateHour = () => {
    const date = new Date()
    const day = getDayName().charAt(0).toUpperCase() + getDayName().slice(1)
    const month = date.getMonth() + 1;
    let minute = date.getMinutes();
    let hour = date.getHours();
    let second = date.getSeconds();

    const secondsHand = document.querySelector('#seconds');
    const minutesHand = document.querySelector('#minutes');
    const hoursHand = document.querySelector('#hours');

    hoursContainer.textContent = `${hour}:${minute}`
    dateContainer.textContent = `${day}, ${getMonthName(month)}`
    secondsHand.style.transform = `rotate(${second * 6}deg)`;
    minutesHand.style.transform = `rotate(${minute * 6}deg)`;
    hoursHand.style.transform = `rotate(${hour * 30}deg)`;
}

colorMode.addEventListener('click', () => {
    const minutesHand = document.querySelector('#minutes');
    const hoursHand = document.querySelector('#hours');
    const centerHand = document.querySelector('#center');
    isDarkMode = !isDarkMode
    if(document.body.classList.contains('light')){
        document.body.classList = 'dark';
        colorMode.innerHTML = '<i class="fa-regular fa-sun fa-xl" style="color: #000000;"></i>';
        minutesHand.style.backgroundColor = 'white';
        hoursHand.style.backgroundColor = 'white';
        centerHand.style.backgroundColor = 'white';
    }else{
        document.body.classList = 'light';
        colorMode.innerHTML = '<i class="fa-solid fa-moon fa-2xl" style="color: #000000;"></i>';
        minutesHand.style.backgroundColor = 'black';
        hoursHand.style.backgroundColor = 'black';
        centerHand.style.backgroundColor = 'black';
    }
})

updateDateHour();
const timeInterval = setInterval(updateDateHour, 1000)