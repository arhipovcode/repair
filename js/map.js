ymaps.ready(init);
  function init(){ 
      // Создание карты.    
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [58.702683121503206,59.468548781123694],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 18
      });
      var myGeoObject = new ymaps.GeoObject({
          geometry:
         {
            type: "Point", // тип геометрии - точка
            coordinates: [58.70302460359499,59.46752887530372], // координаты точки
            iconImageHref: '../img/map/pin.png',
            // Размеры метки.
            iconImageSize: [30, 42],
        }
      });
      myMap.geoObjects.add(myGeoObject); 
  }