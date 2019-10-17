const contact = ()=> {
	$(".map-link").click(function(e) {
		e.preventDefault()
		const href = $(this).attr("href")
		// console.log($(href).offset().top)
		// console.log(href)
		$("html,body").animate({ scrollTop: $(href).offset().top+$('body').scrollTop()-100}, 1000);
		
		// window.location.hash = href
	});
}

const contact__OrangeText = ()=> {
	let count=$('.contactInput').length;
	  for (let i=0; i<count; i++) {
	        // console.log(i);
	    $('.contactInput:eq('+i+')').focus(function(){
	          $('.contactInputText:eq('+i+')').addClass('orangeText');
	    });
	    $('.contactInput:eq('+i+')').focusout(function(){
	          $('.contactInputText:eq('+i+')').removeClass('orangeText');
	    });       
	  }
}

// export default contact
export {contact, contact__OrangeText}
