const navbar = ()=> {
	
	$(".collapse-box__search").click(function(){
		$("i.searchIcon").toggleClass("None");
		$("i.timesIcon").toggleClass("Block");

		$(".searchBox").slideToggle("fast");
		$(".searchInput").focus();
	});
}
// const closeNav = ()=> {

	
// 	const nav = $('.b-nav')
// 	nav.removeClass('b-nav--active')
	
// }
const documentListener = (cb=null) => {
	$(document).on('click touchstart', (e)=>{
		const _this = $(e.target)
		

		// if not self clicked
		if(!_this.closest('.searchBox').length && !_this.closest('.collapse-box__search').length){
			// closeNav()
			$(".searchBox").fadeOut();
			$("i.timesIcon").removeClass("Block");
			$("i.searchIcon").removeClass("None");

		}
		// if(!_this.closest('.searchInput').length && !_this.closest('.searchBox').length){
		// 	$('.shopping-card').removeClass('shopping-card--active')
		// 	$('.searchBox').hide()
		// }
		
	})
}
documentListener();

export default navbar
