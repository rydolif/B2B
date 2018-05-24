$(function() {

//----------menu-------------
	$("#my-menu").mmenu({
		"extensions": [
			 "position-right",
			 "fx-panels-zoom",
			 "position-back",
			 "fx-listitems-slide"
		],
		navbar: {
			title: '<img src="img/footer-svg.svg" alt="list" class="header__list-svg">Our offices:'
		}
	},{clone:true});


//---------якоря-------------
	$(".main").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 500);
	});
//---------якоря-------------


//-------tabs----------
	$('.tab-3__wrap').hide();
  $('.tab-3__wrap:first').show();
  $('.tabs li:first').addClass('main__item-active');

  $('.tabs li').click(function(event){
    $('.tabs li').removeClass('main__item-active');
    $(this).addClass('main__item-active');
    $('.tab-3__wrap').hide();

    var selectTab = $(this).find('a').attr('href');
    $(selectTab).fadeIn();
  });
//-------tabs----------


});
