;(function() {
    let catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    }

    let changeProductSize = function(target) {
        let product = myLib.closestItemByClass(target, 'product');
        let previousBtnActive = product.querySelector('.product__size.is-active');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
    };

    let changeProductOrderInfo = function(target) {
        let product = myLib.closestItemByClass(target, 'product');
        let order = document.querySelector('.popup-order');

        let productTitle = product.querySelector('.product__title').textContent;
        let productSize = product.querySelector('.product__size.is-active').textContent;
        let productPrice = product.querySelector('.product__price-value').textContent;
        let productImgSrc = product.querySelector('.product__img').getAttribute('src');

        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);
        order.querySelector('.order-info-size').setAttribute('value', productSize);

        order.querySelector('.order__img').setAttribute('src', productImgSrc);
        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrice;
        order.querySelector('.order__size').textContent = productSize;
    };

    catalog.addEventListener('click', function(e) {
        let target = e.target;
        console.log(target)

        if (target.classList.contains('product__size')) {
            e.preventDefault();
            changeProductSize(target);
        }

        if (target.classList.contains('product__btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });
})();