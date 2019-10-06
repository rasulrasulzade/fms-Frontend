const servicFunc = ()=> {

	let headerLength=$('.list-item__header').length;
	for (let i=0; i<headerLength; i++) {
		// console.log(i);
		$('.list-item__header:eq('+i+')').click(function(){
			$('.list-item__text:eq('+i+')').slideToggle('Block');
			$('.list-item:eq('+i+')').toggleClass('list-item--active');
			$('.list-item__plus:eq('+i+')').toggleClass('None');
			$('.list-item__times:eq('+i+')').toggleClass('Block');
		});
		
	}
	// let listItemLength=$('.list-item').length;
	// console.log(listItemLength);
}

export default servicFunc