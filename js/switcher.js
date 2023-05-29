let btn = document.querySelector('.btn__switcher');
btn.onclick = (e) => {
    e.preventDefault();
    let theme = document.querySelector('#theme');
    if (theme.getAttribute('href') === 'css/light-theme.css') {
        theme.href = 'css/dark-theme.css';
    } else {
        theme.href = 'css/light-theme.css';
    }
    let CatalogSection = document.querySelector('.section-catalog');
    if (CatalogSection.style.backgroundColor === '') {
        CatalogSection.style.backgroundColor = '#414141';
    } else {
        CatalogSection.style.backgroundColor = '';
    }

    let ContactsSection = document.querySelector('.section-contacts');
    if (ContactsSection.style.backgroundColor === '') {
        ContactsSection.style.backgroundColor = '#414141';
    } else {
        ContactsSection.style.backgroundColor = '';
    }
}