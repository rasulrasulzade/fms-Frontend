const orangeText = ()=> {
  let count=$('.corporation-input').length;
  for (let i=0; i<count; i++) {
        // console.log(i);
    $('.corporation-input:eq('+i+')').focus(function(){
          $('.corporation-form__text:eq('+i+')').addClass('orangeText');
    });
    $('.corporation-input:eq('+i+')').focusout(function(){
          $('.corporation-form__text:eq('+i+')').removeClass('orangeText');
    });       
  }
}

const addFile = ()=> {
    $('.b-invoice__input').change(function(){
      const files = $('.b-invoice__input')[0].files
      const extensions = $('.b-invoice__extensions')
      extensions.text('')

     
	    if(files.length == 1) {
	    	extensions.append($(`<div class="b-invoice__ext">${files[0].name}</div>`))
	    } else if (files.length > 1) {
	    	extensions.append($(`<div class="b-invoice__ext">${files.length} Fayl seçildi</div>`))
	    }
    })
}
export {orangeText, addFile}