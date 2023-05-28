;(function() {
    let showPopup = function(target) {
        target.classList.add('is-active');
    };

    let closePopup = function(target) {
        target.classList.remove('is-active');
    };

    myLib.body.addEventListener('click', function(e) {
        let target = e.target;
        let popupClass = myLib.closestAttr(target, 'data-popup');

        if (popupClass === null) {
            return;
        }

        e.preventDefault();
        let popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('click', function(e) {
        let target = e.target;

        if (target.classList.contains('popup-close') ||
            target.classList.contains('popup__inner')) {
            let popup = myLib.closestItemByClass(target, 'popup');

            closePopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('keydown', function(e) {
        if (e.keyCode !== 27) {
            return;
        }

        let popup = document.querySelector('.popup.is-active');

        if (popup) {
            closePopup(popup);
            myLib.toggleScroll();
        }
    });
})();