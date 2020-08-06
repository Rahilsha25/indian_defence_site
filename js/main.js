$(document).ready(function(){

	$nav = $('.nav');
	$toggleCollapse =$('.toggle-collapse');

	/**  Click Event on Toggle Menu  **/

	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse');
	})





  
	/**  Owl-carousel for blog  **/



	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		dots:false,
	});



	/**  Owl-carousel for blog  **/

	

	/**   Click to Scroll top   **/


	$('.moveup span').click(function(){
		$('html, body').animate({
			scrollTop:0
		},2000);
	})


	/**   Click to Scroll top   **/


})