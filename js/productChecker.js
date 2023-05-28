;(function() {
    let catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    }

    let changeProductSize = function(target) {
        let product = myLib.closestItemByClass(target, 'product').textContent;
        let previousBtnActive = product.querySelector('.product__size.is-active');
        let checker = product.querySelector('.product__checker');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');

        changeCheckerPosition(target, checker);
    };

    let changeCheckerPosition = function(target, checker) {
        checker.style.transform = 'translate(' + target.offsetLeft + 'px' + ', 0)';
    };

    catalog.addEventListener('click', function(e) {
        let target = e.target;

        if (target.classList.contains('product__size')) {
            e.preventDefault();
            changeProductSize(target);
        }
    });

    let timers = {};

    catalog.addEventListener('mousemove', function(e) {
        let target = e.target;
        let parent = myLib.closestItemByClass(target, 'product__sizes');

        if (parent === null) {
            return;
        }

        let product = myLib.closestItemByClass(target, 'product');
        let productTitle = product.querySelector('.product__title').textContent;

        if (timers[productTitle]) {
            clearTimeout(timers[productTitle]);
        }

        currentItem = parent;
        let checker = parent.querySelector('.product__checker');

        if (target.classList.contains('product__size')) {
            changeCheckerPosition(target, checker);
        }
    });

    catalog.addEventListener('mouseout', function(e) {
        let target = e.target;
        let parent = myLib.closestItemByClass(target, 'product__sizes');
        if (parent === null) {
            return;
        }

        parent = target.parentNode;
        let activeBtn = parent.querySelector('.product__size.is-active');
        let checker = parent.querySelector('.product__checker');
        let product = myLib.closestItemByClass(target, 'product');
        let productTitle = product.querySelector('.product__title').textContent;

        if (timers[productTitle]) {
            clearTimeout(timers[productTitle]);
        }

        timers[productTitle] = setTimeout(function() {
            changeCheckerPosition(activeBtn, checker);
        }, 150);
    });
})();