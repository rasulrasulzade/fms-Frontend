const contact = ()=> {
	$(".contact-item__link").click(function(e) {
		e.preventDefault()
		const href = $(this).attr("href")
		// console.log($(href).offset().top)
		// console.log(href)
		$("html,body").animate({ scrollTop: $(href).offset().top+$('body').scrollTop()-100}, 1000);
		
		// window.location.hash = href
	});
}

export default contact