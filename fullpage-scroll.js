$(document).ready(function() {
    $('#fullpage').fullpage({
     navigation: true,
      navigationPosition: 'right',
      //navigationTooltips: ['intro', 'user-journey','user-journey2','colour-coding','cc-mockups','api',],
      showActiveTooltip: true,
        slidesNavigation: true,
          slidesNavPosition: 'bottom',
         controlArrows:false,
         css3: true,
		  scrollingSpeed: 700,
		  
         //after load looks terrible  - the slide slides in and then the elements jump and move
         /*afterLoad: function( section, origin, destination, direction){
          var loadedSlide = this;
      
          var slideMods = $(loadedSlide).find(".module");
          slideMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
                setTimeout(function(){
                  el.removeClass("come-in");
                },2000);
            }
        });
        }*/
    });
});