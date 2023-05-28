;(function() {
    if (typeof ymaps === 'undefined') {
        return;
    }

    ymaps.ready(function () {
        let myMap = new ymaps.Map('ymap', {
                center: [60.008990, 30.352367],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'г. Санкт-Петербург, Проспект Тореза, 37'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/dress-icon.svg',
                iconImageSize: [40, 63],
                iconImageOffset: [-50, -38]
            });

        myMap.geoObjects.add(myPlacemark);
    });


})();