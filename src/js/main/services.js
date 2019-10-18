const servicFunc = ()=> {

	$('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().addClass('accordion-item--active');       
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).parent().removeClass('accordion-item--active');  
    });

// ORANGE TIMES ICON
	$('.accordion-item__header').on('click', function () {
	    	$('.accordion-item__header').not(this).removeClass('plusChangeColor');
			$(this).toggleClass('plusChangeColor');     
	    });

}

export default servicFunc