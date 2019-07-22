//mobile menu
$(document).ready(function(){
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu-main');

	var touchsearch 	= $('#touch-search');
	var searchmob 	= $('.menu-search');

	var touchfact 	= $('#touch-submenu-factory');
	var submobfac 	= $('.sub-menu-factory');

	var touchcat 	= $('#touch-submenu-cat');
	var submobcat 	= $('.sub-menu-cat');

	var touchnewprod 	= $('#touch-submenu-newprod');
	var submobnewprod 	= $('.sub-menu-newprod');

//main-menu
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();

		if(menu.css('display', 'none')) {
			menu.css('display', 'block');
		} else {
			menu.css('display', 'none');
		}

	});
//searrch in the hat
	$(touchsearch).on('click', function(e) {
		e.preventDefault();
		searchmob.slideToggle();
	});
//submenu about factory
	$(touchfact).on('click', function(e) {
		e.preventDefault();
		submobfac.slideToggle();
	});
//submenu catalogue
	$(touchcat).on('click', function(e) {
		e.preventDefault();
		submobcat.slideToggle();
	});
//submenu newprod
	$(touchnewprod).on('click', function(e) {
		e.preventDefault();
		submobnewprod.slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
		if(w > 767 && searchmob.is(':hidden')) {
			searchmob.removeAttr('style');
		}
		if(w > 767 && submobfac.is(':hidden')) {
			submobfac.removeAttr('style');
		}
		if(w > 767 && submobcat.is(':hidden')) {
			submobcat.removeAttr('style');
		}
		if(w > 767 && submobnewprod.is(':hidden')) {
			submobnewprod.removeAttr('style');
		}
	});
});
