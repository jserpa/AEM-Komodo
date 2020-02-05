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
				reset();
			}
		} else { 
			sticky.removeClass('scroll-hide');
			$('.search-bar').removeClass('scroll-up');
			$('.header-logo').removeClass('mb-fix');
		}
	});
	$(window).resize(function(){
		if ($(window).width() >= 991) {
			$('.panel').show();
		} else {
			location.reload(true);
			$('.panel').hide();
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
		// $('#popular').toggle();
		if ($('#popular').css('display') == 'none') {
			console.log( "show" );
			$('#popular').show();
		} 
		$('.panel').hide();
//		if ($('#popular').css('display') != 'none') {
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
	
	// Mobile back
	$('.mobile-back').click(function() {
		$('.dropdown-cont').hide();
		$('#nav').show();
		$('#nav').addClass('mobile-main-nav');
		$('#popular').show();
		if ($(window).width() <= 991) {
			$('#nav').css('width', '100%');
		}
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
			$('#nav').css('width', '0px');
		}
	});
	$('.shop').click(function() {
		$(this).toggleClass('active');
		$('#shop').toggle();
		if ($(window).width() <= 991) {
			$('#nav').css('width', '0px');
		}
	});
	$('.service').click(function() {
		$(this).toggleClass('active');
		$('#service').toggle();
		if ($(window).width() <= 991) {
			$('#nav').css('width', '0px');
		}
	});
	$('.support').click(function() {
		$(this).toggleClass('active');
		$('#support').toggle();
		if ($(window).width() <= 991) {
			$('#nav').css('width', '0px');
		}
	});
	$('.accordion').click(function() {
		$('.panel').hide();
		$(this).next('.panel').toggle();
	});
	
	
	
});