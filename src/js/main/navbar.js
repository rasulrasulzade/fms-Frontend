const navbar = ()=> {
	
	$(".collapse-box__search").click(function(){
		$("i.searchIcon").toggleClass("iconNone");
		$("i.timesIcon").toggleClass("iconBlock");

		$(".searchBox").slideToggle("fast");
		$(".searchInput").focus();
	});

}
export default navbar
