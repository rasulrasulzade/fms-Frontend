const navbar = ()=> {
	// let addWidth = () => {
	// 	document.querySelector(".navbar--logo").classList.add("navLogoSmall");
	// }
	// let delWidth = () => {
	// 	document.querySelector(".navbar--logo").classList.remove("navLogoSmall");
	// }

	// let searchInput=document.querySelector(".b-search-input");
		
	// searchInput.onfocus=function() {addWidth();}
	// searchInput.onfocusout=function() {delWidth();}  
	$(".collapse--box__search").click(function(){
		$("i.searchIcon").toggleClass("iconNone");
		$("i.timesIcon").toggleClass("iconBlock");

		$(".searchBox").slideToggle("fast");
		$(".searchInput").focus();
	});

	// let $navBar = $('.navbarr');
 //  	let navPos = $navBar.offset().top;
  	// let scrollPos = $(window).scrollTop();


	// $(window).scroll(function() {
 //       let scrollPos = $(this).scrollTop();

 //      if (scrollPos >= navPos+40) {
 //          $navBar.addClass('sticky');
 //      } else {
 //          $navBar.removeClass('sticky');
 //      }
 //    });
}
export default navbar
