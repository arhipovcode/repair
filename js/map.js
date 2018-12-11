ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
            center: [58.702683121503206, 59.468548781123694],
            zoom: 17,
            behaviors: ['default', 'scrollZoom'],
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([58.70302460359499, 59.46752887530372],

            {
                balloonContentBody: "<div class='ballon-point'><div class='ballon-img'><img src='/wp-content/themes/mytheme/img/logo.png'/></div><div class='ballon-content'>Какой-нибудь текст, который откроется при клике на метку карты</div></div>"
            },

            {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.png',
                iconImageSize: [60, 60],
                iconImageOffset: [-33, -90]
            });


    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');

});