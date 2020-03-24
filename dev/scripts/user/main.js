window.addEventListener('load', function(){

    //Header 100vh
    function resizeHeader(){
      let height = window.innerHeight;
      document.querySelector('.header').style.height = `${height}px`;
    };
    resizeHeader();
    window.addEventListener('resize', resizeHeader);

    //Smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    //Clean hash 
    history.pushState('', document.title, window.location.pathname);
    window.addEventListener('beforeunload', function(){
      window.scrollTo(0,0);
    })
  
    //Slider options
    var slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        lazyload: true
      });
      
    //Submit off
    document.querySelector('.submit').addEventListener('click', function(event){
        event.preventDefault();
    })

    //Timer
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
       
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
       
        function updateClock() {
          var t = getTimeRemaining(endtime);
       
        //   daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
       
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
       
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
       
      var deadline = new Date(Date.parse(new Date()) + 5 * 24 * 60 * 60 * 1000); // for endless timer
      initializeClock('countdown', deadline);
})
