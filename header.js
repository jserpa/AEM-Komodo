$( document ).ready(function() {	
	//console.log( "ready!" );
	$(window).scroll(function(){
		var sticky = $('.scroll'),
		scroll = $(window).scrollTop();
		if (scroll >= 30) {
			if ($(window).width() >= 991) {
				sticky.addClass('scroll-hide');
				$('.search-bar').addClass('scroll-up');
				$('.header-logo').addClass('mb-fix');
//				$('.header-container').addClass('header-fixed');
				reset();
			}
		} else { 
			sticky.removeClass('scroll-hide');
			$('.search-bar').removeClass('scroll-up');
			$('.header-logo').removeClass('mb-fix');
//			$('.header-container').removeClass('header-fixed');
		}
	});
	$(window).resize(function(){
		if ($(window).width() >= 991) {
//			$('#sign-in').show();
//			$('#sign-in').removeClass('mobile-login');
//			$('#nav').removeClass('mobile-nav');
//			$('#nav').removeClass('mobile-main-nav');
		} else {
			location.reload(true);
//			$('ul.nav-list').find('li.popular').appendTo('ul.nav-list');
//			$('#sign-in').hide();
//			$('#sign-in').addClass('mobile-login');
//			$('#nav').addClass('mobile-nav');
//			$('#nav').addClass('mobile-main-nav');
		}
	});
	
	function reset() {
		$('a').removeClass('active');
		$('.dropdown-cont').hide();
		$('.login-cont').hide();
	};
	
	// Search
	$('.search-dd-container').hide();
	$('.search-dd-button').click(function() {
		$('.search-dd-container').show();
	});
	$('.search-dd-item').click(function() {
		$('.search-dd-container').hide();
		$('.search-dd').val($(this).text());
		$('.close-dd').show();
	});
	$('.search-dd-head').click(function() {
		$('.search-dd-container').hide();
		$('.search-dd').val($(this).text());
	});
	$('.delete-search').hide();
	$('.search-input').focusin(function() {
		$('.delete-search').show();
	});
	$('.delete-search').click(function() {
		$('.search-input').val('');
		$('.delete-search').hide();
	});
	// Mobile search
	$('.search').click(function() {
		$('.search-bar').toggleClass('mobile-search');
		$('span', this).toggleClass('icon-24-close-bold icon-24-search-mono');
		$(this).toggleClass('active2');
	});
	// Hide all dropdowns on click
	$('a').click(function() {
		reset();
	});
	// Mobile hamburger menue
	$('.burger-link').click(function() {
		$('span', this).toggleClass('icon-24-close-bold icon-24-hamburgerMenu-bold')
		$('#nav').toggleClass('hide-small');
		$(this).toggleClass('active2');
		// $('#nav').toggleClass('mobile-nav');
		$('#nav').toggleClass('mobile-main-nav');
		$('#popular').toggle();
		//		if ($('#popular').css('display') == 'none') {
//			console.log( "show" );
//			$('#popular').show();
//		} else {
//			console.log( "hide" );
//			$('#popular').hide();
//		}
		// $('#nav').toggle();  
		// $('#sign-in').toggle();
		// $('#sign-in').toggleClass('mobile-login');
	});
	// Hide all dropdowns on page load
	$('.dropdown-cont').hide();
	// Close mego nav on click
	$('.dropdown-cont').click (function() {
		
	});
	// Login 
	$('.login-cont').hide();
	$('.login-link').click(function() {
		$(this).toggleClass('active');
		$('.login-cont').toggle();
	});
	// Popular Dropdown
	$('.popular').click(function() {
		$(this).toggleClass('active');
		$('#popular').toggle();
	});
	$('.apps').click(function() {
		$(this).toggleClass('active');
		$('#apps').toggle();
		if ($(window).width() <= 991) {
			$('#nav').width(0);
		}
	});
	$('.shop').click(function() {
		$(this).toggleClass('active');
		$('#shop').toggle();
	});
	$('.service').click(function() {
		$(this).toggleClass('active');
		$('#service').toggle();
	});
	$('.support').click(function() {
		$(this).toggleClass('active');
		$('#support').toggle();
	});
});