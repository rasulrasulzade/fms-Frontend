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
	});
}
export default navbar
