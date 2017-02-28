$(document).ready(function() {
  var mins = 25;
  var secs = 0; 
  var run = false;
  
  function disp(val) {
    if (val < 10) {
      $('#count').text(mins + " : 0" + val);
    } else {
       $('#count').text(mins + " :  " + val);
    }
  }
  
  disp(secs);
  
  $('#timeChange > div').click(function() {
    if ($(this).is('#plus')) {
      mins++;
    } else {
      if (mins > 1) {
        mins--;
      }
    }
    disp(secs);
  });
  
  $('#timer').click(function() {
    run = !run;
    var timer = setInterval(function() {
      if (run === false) {
        clearInterval(timer);
      }
      
      if(mins < 0) {
        clearInterval(timer);
        mins = 0;
        secs = 0;
        disp(secs);
        run = false;
      } else if (secs < 0) {
        mins--;
        secs = 59;
      }
      
			if (run) {
				$('#timer').css('background-color', '#111');
			} else {
				$('#timer').css('background-color', '#333');
			}
			
      disp(secs--);
			
        
      $('#reset').click(function() {
        clearInterval(timer);
        mins = 25;
        secs = 0;
        disp(secs);    
      });
    }, 1000);
  });
  
});
