;(function () {
    let form = document.querySelector('.form-send');
    if (form.length === 0) {
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let activePopup = document.querySelector('.popup.is-active');
        document.querySelector('.popup-thanks').classList.add('is-active');
        form.reset();
        if (activePopup) {
            activePopup.classList.remove('is-active');
        } else {
            myLib.toggleScroll();}
    });
})();
