

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
    }

}






//Animation of function duration

scrollEffect('.container-1', 1000);
