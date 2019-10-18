'use strict'
import navbar from './navbar'
import servicFunc from './services'
import {orangeText, addFile} from './corporation'
import slickSlider from './slider'
// import contact from './contact'
// import contact__OrangeText from './contact'
import {contact, contact__OrangeText} from './contact'
$(document).ready(function(){

 navbar();

 servicFunc();

 orangeText();

 addFile();

 slickSlider();
 
 contact();

 contact__OrangeText();

ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [40.387659, 49.815589],
                zoom: 17,
                // controls: ['zoomControl', 'fullscreenControl']
            });
            // myGeoObject = new ymaps.GeoObject({
            //   geometry: {
            //     type: "Point", // geometry type - point
            //     coordinates: [52.5200, 13.4050] // координаты точки
            //   }
            // });
              // myMap.geoObjects.add(myGeoObject); // Placing a geo object on the map.

              // from FIZZA
               var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                                          balloonContent: '<strong>blue</strong> color',
                                          iconCaption: 'Fizza'
                                      }, {
                                          // Опции.
                                          // Необходимо указать данный тип макета.
                                          iconLayout: 'default#image',
                                          // Своё изображение иконки метки.
                                          iconImageHref: 'img/maps-and-flags.png',
                                          // Размеры метки.
                                          iconImageSize: [40, 55],
                                          // Смещение левого верхнего угла иконки относительно
                                          // её "ножки" (точки привязки).
                                          // iconImageOffset: [-5, -38]
                                      })
                                      myMap.geoObjects.add(myPlacemark)
            // the end
         }

});