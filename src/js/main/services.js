const servicFunc = ()=> {

	// let headerLength=$('.accordion-item__header').length;
	// 	// alert(headerLength);
	// for (let i=0; i<headerLength; i++) {
	// 	// console.log(i);
	// 	$('.accordion-item__header:eq('+i+')').click(function(){
	// 		// alert(i);
	// 		$('.accordion-item__text:gt('+i+')').slideUp();
	// 		$('.accordion-item:gt('+i+')').removeClass('accordion-item--active');
	// 		$('.accordion-item:gt('+i+')').removeClass('h-auto');
	// 		$('.accordion-item__plus:gt('+i+')').removeClass('plus-times');

	// 		$('.accordion-item__text:eq('+i+')').slideToggle();
	// 		$('.accordion-item:eq('+i+')').toggleClass('accordion-item--active');
	// 		$('.accordion-item:eq('+i+')').toggleClass('h-auto');
	// 		$('.accordion-item__plus:eq('+i+')').toggleClass('plus-times');
	// 	});
		
	// }
	$('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().addClass('accordion-item--active');       
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).parent().removeClass('accordion-item--active');  
    });

 //    let headerLength=$('.accordion-item__header').length;
	// for (let i=0; i<headerLength; i++) {
	//     $('.accordion-item__header:eq('+i+')').on('click', function () {
	//     	$('.accordion-item__header:gt('+i+')').removeClass('plusChangeColor');
	// 		$(this).toggleClass('plusChangeColor');     
	//     });
	// }
	$('.accordion-item__header').on('click', function () {
	    	$('.accordion-item__header').not(this).removeClass('plusChangeColor');
			$(this).toggleClass('plusChangeColor');     
	    });

    // $('.accardionHeader').on('hidden.bs.collapsing', function () {
    // 	$(this).removeClass('plusChangeColor'); 
    // });


}

export default servicFunc