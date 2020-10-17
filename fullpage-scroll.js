$(document).ready(function() {
    $('#fullpage').fullpage({
     navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['intro', 'user-journey','user-journey2','colour-coding','cc-mockups','api',],
      showActiveTooltip: true,
        slidesNavigation: true,
          slidesNavPosition: 'bottom',
         controlArrows:false,
    });
});