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

});