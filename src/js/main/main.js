'use strict'
import {navbar, documentListener} from './navbar'
import servicFunc from './services'
import {orangeText, addFile} from './corporation'
import slickSlider from './slider'
import {contact, contact__OrangeText} from './contact'
$(document).ready(function(){

 navbar();
 documentListener();

 servicFunc();

 orangeText();

 addFile();

 slickSlider();
 
 contact();

 contact__OrangeText();

// ymaps.ready(initMap);
//         function initMap(){
//             var myMap = new ymaps.Map("map", {
//                 // center: [x, y],
//                 // center: [40.387659, 49.815589],
//                 zoom: 17,
//                 // controls: ['zoomControl', 'fullscreenControl']
//             });
//               // from FMS
//                var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//                                           balloonContent: '<strong>blue</strong> color',
//                                           iconCaption: 'FMS'
//                                       }, {
//                                           iconLayout: 'default#image',
//                                           iconImageHref: 'img/maps-and-flags.png',
//                                           iconImageSize: [40, 55],
//                                           // iconImageOffset: [-5, -38]
//                                       })
//                                       myMap.geoObjects.add(myPlacemark)
//             // the end
//          }
});