$(document).ready(function(){



	// don't allow key navigation of select for left/right, since they are page navigation
	$('select').keydown(function(event){
		console.log(event.keyCode)
		if ((event.keyCode == 37) | (event.keyCode == 39)){
			event.preventDefault()
		}
	});

	$(document.documentElement).keyup(function (event) { // handle cursor keys
	  if (event.keyCode == 37) { moveBackward() }// go left
	  else if (event.keyCode == 39) {
	    moveForward()}// go right 
	});

	infoDivs = $('div.info')//this is used in moveForward, moveBackward	


	// initialize to first div.info
	$(infoDivs).hide().css('left',$('.nav-els').width())
	$(infoDivs[0]).show().addClass('active').animate({left:0},200)



	// add click handlers to forward/backward buttons
	$('div#forward').click( moveForward)
	$('div#back').click( moveBackward)







	function moveForward(){//move forwards in the list of .info divs
		var activeIndex = getActive(infoDivs)

		if (activeIndex+1 < infoDivs.length){
			moveAnimate(infoDivs[activeIndex], infoDivs[activeIndex+1], -$('.nav-els').width())
		}
		return true;

	}

	function moveBackward(){//move backwards in the list of .info divs
		var activeIndex = getActive(infoDivs)
		if (activeIndex-1 >= 0){
			moveAnimate(infoDivs[activeIndex], infoDivs[activeIndex-1], $('.nav-els').width())
		}
		return true
	}

	function moveAnimate(oldEl, newEl, displace){
		// move old element out of the way and hide
		$(oldEl).animate({left: displace},200,function(){
			$(this).hide().removeClass('active')})
		// move new element into the center
		$(newEl)
			.show().addClass('active')
			.animate({left: 0},200)

	}
	function getActive(els){ // find the index of the active div
		for(i=0; i< els.length; i++){
			if( $(els[i]).hasClass('active')){ return i }
		}
	};
});