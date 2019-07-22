/* Делаем собственный слайдер на jQuery */

$(function() {	
	
	//массив со всеми плей листами
	var arrCarusel = document.querySelectorAll('.videocarusel');
	var arrElem = document.querySelectorAll('.videocarusel__wprapper');
	var arrEl =[];

	//массив для запоминания кадра
	var arrSlideNow=[];
	
	var listSlidersCount = $(arrElem).length;
	var sliderNow = 0;
	//текущая позиция кадра
	var slideNow = 0;

	//$(curCarusel).toggleClass('videocarusel__wprapper--active');

	// текущий массив со слайдерами
	var slidemassiv=$('.videocarusel__wprapper').children();
	// длина текущего массива со слайдерами
	var slideCount = $('.videocarusel__wprapper').children().length;

	var clickCount = 0;

	// устанавливаем активные слайды для всех плей-листов
	for (var i = 0; i < listSlidersCount; i++){
		var curslider=$(arrCarusel[i]);
		var slidearr=$(arrElem[i]).children();
		var sliderslenght=$(slidearr).length;
		$(slidearr[0]).toggleClass('activeslide');
		$(slidearr[1]).toggleClass('activeslide');
		$(slidearr[2]).toggleClass('activeslide');
		$(slidearr[3]).toggleClass('activeslide');	
		arrSlideNow[i]=0;
		console.log(sliderslenght);
		if (sliderslenght<5){
			var t = curslider.children();
			$(t[1]).toggleClass('hide');
			$(t[2]).toggleClass('hide');		

		}
	}


	// сбрасываем активные сладеры и позицию кадра при пересечении поля между слайдерами
	$('.videocarusel').mouseenter(function(e) {
		$(slidemassiv[slideNow]).toggleClass('activeslide');
		$(slidemassiv[slideNow+1]).toggleClass('activeslide');
		$(slidemassiv[slideNow+2]).toggleClass('activeslide');
		$(slidemassiv[slideNow+3]).toggleClass('activeslide');	
		$(slidemassiv[0]).toggleClass('activeslide');
		$(slidemassiv[1]).toggleClass('activeslide');
		$(slidemassiv[2]).toggleClass('activeslide');
		$(slidemassiv[3]).toggleClass('activeslide');
		slideNow = 0;

		
	});

	$(slidemassiv).mouseover(function(e) {
		
	});

	$(slidemassiv).mouseout(function() {
		
	});

	//setInterval(nextSlide, slideTime);


	$('.videocarusel__btn-next').click(nextSlide);
	$('.videocarusel__btn-prev').click(prevSlide);


	$(".videocarusel__wprapper").swipe({
		swipeLeft: function() {
			var slidecur = this;

			slidemassiv= $(slidecur).children();
			slideCount = $(slidemassiv).length;


			if (clickCount == 0){

			}

			clickCount++;
			if (slideNow < slideCount -4) {
				
				$(slidemassiv[slideNow]).toggleClass('activeslide');
				$(slidemassiv[+slideNow+4]).toggleClass('activeslide');
				slideNow++;
				
			}
			else if (slideNow == slideCount -4){
				

				$(slidemassiv[slideNow+3]).toggleClass('activeslide');
				$(slidemassiv[slideNow+2]).toggleClass('activeslide');
				$(slidemassiv[slideNow+1]).toggleClass('activeslide');
				$(slidemassiv[slideNow]).toggleClass('activeslide');

				$(slidemassiv[0]).toggleClass('activeslide');
				$(slidemassiv[1]).toggleClass('activeslide');
				$(slidemassiv[2]).toggleClass('activeslide');
				$(slidemassiv[3]).toggleClass('activeslide');
				slideNow = 0;
			}
			
		},
		swipeRight: function() {
			var slidecur = this;
			slidemassiv= $(slidecur).children();
			slideCount = $(slidemassiv).length;

			if (slideNow > 0){
				
				$(slidemassiv[+slideNow+3]).toggleClass('activeslide');

				$(slidemassiv[+slideNow-1]).toggleClass('activeslide');
				slideNow--;
				
			}
			else if (slideNow == 0){
				
				$(slidemassiv[slideCount - 4]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 3]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 2]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 1]).toggleClass('activeslide');

				$(slidemassiv[0]).toggleClass('activeslide');
				$(slidemassiv[1]).toggleClass('activeslide');
				$(slidemassiv[2]).toggleClass('activeslide');
				$(slidemassiv[3]).toggleClass('activeslide');

				slideNow = slideCount -4;
				
			}
		},
		allowPageScroll: "vertical"
	});
  	
 
	function nextSlide() {
				
		var slidecur = this.parentNode.children[0];

		slidemassiv= $(slidecur).children();
		slideCount = $(slidemassiv).length;


		if (clickCount == 0){

		}

		clickCount++;
		if (slideNow < slideCount -4) {
			
			$(slidemassiv[slideNow]).toggleClass('activeslide');
			$(slidemassiv[+slideNow+4]).toggleClass('activeslide');
			slideNow++;
			
		}
		else if (slideNow == slideCount -4){
			

			$(slidemassiv[slideNow+3]).toggleClass('activeslide');
			$(slidemassiv[slideNow+2]).toggleClass('activeslide');
			$(slidemassiv[slideNow+1]).toggleClass('activeslide');
			$(slidemassiv[slideNow]).toggleClass('activeslide');

			$(slidemassiv[0]).toggleClass('activeslide');
			$(slidemassiv[1]).toggleClass('activeslide');
			$(slidemassiv[2]).toggleClass('activeslide');
			$(slidemassiv[3]).toggleClass('activeslide');
			slideNow = 0;
		}
		
	}


	function prevSlide() {

		var slidecur = this.parentNode.children[0];
		slidemassiv= $(slidecur).children();
		slideCount = $(slidemassiv).length;

		if (slideNow > 0){
			
			$(slidemassiv[+slideNow+3]).toggleClass('activeslide');

			$(slidemassiv[+slideNow-1]).toggleClass('activeslide');
			slideNow--;
			
		}
		else if (slideNow == 0){
			
			$(slidemassiv[slideCount - 4]).toggleClass('activeslide');
			$(slidemassiv[slideCount - 3]).toggleClass('activeslide');
			$(slidemassiv[slideCount - 2]).toggleClass('activeslide');
			$(slidemassiv[slideCount - 1]).toggleClass('activeslide');

			$(slidemassiv[0]).toggleClass('activeslide');
			$(slidemassiv[1]).toggleClass('activeslide');
			$(slidemassiv[2]).toggleClass('activeslide');
			$(slidemassiv[3]).toggleClass('activeslide');

			slideNow = slideCount -4;
			
		}
		
	}

	// $(this).keydown(function(event) {
	// 	if ( event.which == 39) {
	// 		nextSlide();
	// 	}
	// 	if ( event.which == 37) {
	// 		prevSlide();
	// 	}
	// });
});	