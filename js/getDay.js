function getDayInfo(date) {
    let day = new Date(date.textContent);
    let weekday = getWeekDay(day);
    let weekNum = getWeek(day, date);
    let month = getMonths(day);
    let year = day.getFullYear();
    return (`${weekday}, ${weekNum} неделя ${month} ${year} года`);
}

function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}

function getMonths(date) {
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return months[date.getMonth()];
}

function getWeek(day, date) {
    let info = date.textContent.split('-');
    day = new Date(day.getFullYear(), day.getMonth(), 1);
    if (day.getDay() === 0) {
        return Math.floor((Number(info[2]) + 5) / 7) + 1;
    }
    return Math.floor((Number(info[2]) + day.getDay() - 2) / 7) + 1;
}

let dates = document.querySelectorAll('.product__date');
dates.forEach((date) => {
    date.textContent = getDayInfo(date);
})