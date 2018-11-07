

// smoothe scroll

function scrollEffect(target,duration){
    //selecting the target
    var target = document.querySelector(target);
    //relative scroll position
    var targetDestination = target.getBoundingClientRect().top;
   //initial start position
    var initPosition = window.pageYOffset;
  //distance between the two
    var _distance  = targetDestination - initPosition;
  //starting time
    var _initTime = null;


    function scrollAnimation(currentTime){
         if(_initTime === null) _initTime = currentTime;
         var elaspTime = currentTime - _initTime;
         var executeAnimation = Math.easeOutCubic(elaspTime,initPosition,_distance,duration);
         //scroll on the vertical axis
         window.scrollTo(0,executeAnimation);
         if(elaspTime < duration) requestAnimationFrame(scrollAnimation);
    }

    //easing function

    Math.easeOutCubic = function (t, b, c, d) {
    	t /= d;
    	t--;
    	return c*(t*t*t + 1) + b;
    };


    //will loop through at 60 fps
    requestAnimationFrame(scrollAnimation);
}




var link_1 = document.querySelector('.link-1');
link_1.addEventListener('click',function(){

  //Animation of function duration in 1000 millisecs
  scrollEffect('.link-2', 1000);
  });
