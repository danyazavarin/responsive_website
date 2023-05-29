let btn = document.querySelector('.btn__switcher');
btn.onclick = (e) => {
    e.preventDefault();
    let theme = document.querySelector('#theme');
    if (theme.getAttribute('href') === 'css/light-theme.css') {
        theme.href = 'css/dark-theme.css';
    } else {
        theme.href = 'css/light-theme.css';
    }
}