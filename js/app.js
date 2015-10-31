$(document).ready(function() {

	$('.ryu-action').hide();

	$('.ryu-still').show();

 	$('.ryu').mouseenter(function() {
 		$('.ryu-action').hide();
		$('.ryu-ready').show();
  	});

 	$('.ryu').mouseleave(function() {
    	$('.ryu-action').hide();
		$('.ryu-still').show();
  	});

 	$('.ryu').mousedown(function() {
 		playHadouken();
    	$('.ryu-action').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
  			{'left': '1020px'},
  			500,
  			function() {
    			$(this).hide();
    			$(this).css('left', '520px');
    		});
  	});

  	$('.ryu').mouseup(function() {
   		$('.ryu-action').hide();
  		$('.ryu-ready').show();
  	});

	$(document).keydown(function(key) {
		if (key.keyCode == 88) {
			playSong();
			$('.ryu-action').hide();
			$('.ryu-cool').show();
			}
	});
	$(document).keyup(function(key) {
		if (key.keyCode == 88) {
			$('.ryu-action').hide();
			$('.ryu-still').show();
			$('#cool-sound')[0].pause();
			}
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

function playSong () {
  $('#cool-sound')[0].volume = 0.5;
  /*$('#cool-sound')[0].load();*/
  $('#cool-sound')[0].play();
};