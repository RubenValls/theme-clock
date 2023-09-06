const generalDate = new Date();

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

const setTodayInfo = () => {
    const day = getDayName().charAt(0).toUpperCase() + getDayName().slice(1);
    const month = generalDate.getMonth() + 1;
    dateContainer.innerHTML = `${day}, ${getMonthName(month)} <div id="day-number"}>${generalDate.getDate()}</div>`
}

const updateDateHour = () => {
    const date = new Date();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let second = date.getSeconds();

    const secondsHand = document.querySelector('#seconds');
    const minutesHand = document.querySelector('#minutes');
    const hoursHand = document.querySelector('#hours');

    hoursContainer.textContent = `${hour}:${minute}`
    secondsHand.style.transform = `rotate(${second * 6}deg)`;
    minutesHand.style.transform = `rotate(${minute * 6}deg)`;
    hoursHand.style.transform = `rotate(${hour * 30}deg)`;
}

const changeColorMode = () => {
    const toggleMode = document.querySelector('#toggle-mode');
    const minutesHand = document.querySelector('#minutes');
    const hoursHand = document.querySelector('#hours');
    const centerHand = document.querySelector('#center');
    const dateNumberContainer = document.querySelector('#day-number');

    if(document.body.classList.contains('light')){
        document.body.classList = 'dark';
        toggleMode.style.backgroundColor = 'white';
        toggleMode.style.boxShadow = '2px 2px 2px rgba(220, 220, 220, 0.6)';
        colorMode.innerHTML = '<i class="fa-regular fa-sun fa-xl" style="color: #000000;"></i>';
        minutesHand.style.backgroundColor = 'white';
        hoursHand.style.backgroundColor = 'white';
        centerHand.style.backgroundColor = 'white';
        dateNumberContainer.style.backgroundColor = 'white';
        dateNumberContainer.style.color = 'black';
    }else{
        document.body.classList = 'light';
        toggleMode.style.backgroundColor = 'black';
        toggleMode.style.boxShadow = '2px 2px 2px rgba(60, 60, 60, 0.6)';
        toggleMode.style.backgroundColor = '#000000';
        colorMode.innerHTML = '<i class="fa-solid fa-moon fa-2xl" style="color: #ffffff;"></i>';
        minutesHand.style.backgroundColor = 'black';
        hoursHand.style.backgroundColor = 'black';
        centerHand.style.backgroundColor = 'black';
        dateNumberContainer.style.backgroundColor = 'black';
        dateNumberContainer.style.color = 'white';
    }
}

colorMode.addEventListener('click', changeColorMode)
updateDateHour();
setTodayInfo();
const timeInterval = setInterval(updateDateHour, 1000);