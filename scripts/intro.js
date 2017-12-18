$(document).ready(function(){
  console.log("start!");



  /*Audio with text*/
  var $introAudio = $("#introAudio");
  var $introAudioMarker = $("#introAudioMarker");

  var lastScrollTop = 0;

  $(window).on('load resize scroll', function() {

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return viewportTop <= elementTop && viewportBottom >= elementBottom;
    };

    $.fn.isNotInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom <= viewportTop || elementTop >= viewportBottom;
    };

    var st = $(this).scrollTop();

    $('#introAudioMarker').each(function() {
      if ($(this).isInViewport() && !$(this).hasClass('played')) {
        $("#introAudio").get(0).play();
        $introAudio.stop(true,true);
        $("#introAudio").animate({volume: 1}, 200);
        $("#introAudioMarker").addClass("played");
        // console.log("in");
      } else if ($(this).isNotInViewport()) {
        $("#introAudio").animate({volume: 0}, 1000);
        // console.log("OUT_down");
      }
    });




    lastScrollTop = st;
  });

  /*until here*/



/*landing new way attempt*/
var $landingImg = $(".landingImage");
var $landingText = $("#landingText");
var $landingFadeOutMarker = $("#landingFadeOutMarker");
var lastScrollTop = 0;

$(window).on('load resize scroll', function() {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  var st = $(this).scrollTop();

  $('#landingFadeOutMarker').each(function() {
    if ($(this).isInViewport()) {
      $(".landingImage").removeClass("noOpacity");
      $(".landingText").removeClass("noOpacity");
      $(".scrollCalling").removeClass("noOpacity");
      $(".firstRectanglesGroup").addClass("noOpacity");

    } else if ($(this).isNotInViewport()) {
      $(".landingImage").addClass("noOpacity");
      $(".landingText").addClass("noOpacity");
      $(".scrollCalling").addClass("noOpacity");
      $(".firstRectanglesGroup").addClass("noOpacity");
    }
  });



  lastScrollTop = st;
});


$(".mouse").click(function(){
  $('html,body').animate({ scrollTop:$("#introParagraph").offset().top}, 500);
});
/*until here*/





/*clearfix from right alignment*/
  $('.text-right').after('<div class="clearfix"></div>');
  $('.text-far-right').after('<div class="clearfix"></div>');
  $('.text-far-far-right').after('<div class="clearfix"></div>');
  $('.single-img-right').after('<div class="clearfix"></div>');
  $('.single-img-far-right').after('<div class="clearfix"></div>');
  $('.single-img-far-far-right').after('<div class="clearfix"></div>');
/*until here*/

//menu beginning
  var Menu = {

    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },

    init: function() {
      Menu.bindUIactions();
    },

    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },

    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
  };
  Menu.init();

    $('#articlesMenuRight').hover(function(){
      $('#articlesMenuRight').toggleClass('down');
      $('#backgroundColor').toggleClass('darkBackground');
    });
    $('#articlesMenuLeft').hover(function(){
      $('#articlesMenuLeft').toggleClass('down');
      $('#backgroundColor').toggleClass('darkBackground');
    });

    $('#nav-icon3').click(function(){
      if (!$(this).hasClass("menuActivated")){
        $('#menu').removeClass('disabled');
        $('#menu').addClass('enabled');
        // $('#menu').removeClass('noOpacityTransition');
        $('body').on('scroll mousewheel touchmove', stopScrolling);
        $("#nav-icon3").addClass("menuActivated");
        $("#menu tr").addClass("menuContentEnabled");
        $(".separationLine").addClass("separationLineEnabled");
      } else {
        $('#menu').addClass('disabled');
        setTimeout(function () {
          $('#menu').removeClass('enabled');
          // $('#menu').removeClass('disabled');
        }, 400);
        // $('#menu').addClass('noOpacityTransition');
        $('body').off('scroll mousewheel touchmove', stopScrolling);
        $("#nav-icon3").removeClass("menuActivated")
        $("#menu tr").removeClass("menuContentEnabled");
        $(".separationLine").removeClass("separationLineEnabled");
      }
    });


  var $hamburger = $("#nav-icon3");
  function hideMenu(){
      if ($("#menu").css("display") == "inherit") {
          $hamburger.addClass("hide");
      } else {
          $hamburger.removeClass("hide");
      }
    }
  hideMenu();
  $(window).resize(hideMenu);

function stopScrolling (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
}
/*until here*/


/*hamburger button*/
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
/*until here*/






/*sections transitions*/
$.fn.bottomInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom < viewportBottom - $(window).height()/4;
};

var lastScrollTop = 0;

$(window).on('load resize scroll', function() {
  var st = $(this).scrollTop();

  $('.fadeSection').each(function() {
    var $el = $(".afterFadeSection");


    if ($(this).bottomInViewport() && !$(this).hasClass('noOpacity')) {
      $(this).addClass("noOpacity");
      setTimeout(function () {
          $el.addClass('afterFadeSectionActive');
          $el.removeClass("noOpacity");
      }, 500);

    } else if(!$(this).bottomInViewport() && $(this).hasClass('noOpacity')) {
      $(this).removeClass("noOpacity");
      $el.addClass("noOpacity");
      setTimeout(function () {
          $el.removeClass('afterFadeSectionActive');
      }, 500);
    }
  });


  lastScrollTop = st;
});

/*until here*/



/*hamburger button*/
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
/*until here*/


/*attempt animation of rectangles*/
$(window).on('load resize scroll', function() {
  var $layer1 = $("#firstRectanglesGroup .rectanglesAnimation.layer1.firstMoment");
  setTimeout(function () {
      $layer1.addClass('activeGrowing');
  }, 000);
  setTimeout(function () {
      $layer1.addClass('activeDecreasing');
  }, 400);
  var $layer1V2 = $("#firstRectanglesGroup .rectanglesAnimation.layer1.secondMoment");
  setTimeout(function () {
      $layer1V2.addClass('activeGrowing');
  }, 1200);
  setTimeout(function () {
      $layer1V2.addClass('activeDecreasing');
  }, 1600);
  var $layer1V3 = $("#firstRectanglesGroup .rectanglesAnimation.layer1.thirdMoment");
  setTimeout(function () {
      $layer1V3.addClass('activeGrowing');
  }, 2400);
  setTimeout(function () {
      $layer1V3.addClass('activeDecreasing');
  }, 2800);


  var $layer2 = $("#firstRectanglesGroup .rectanglesAnimation.layer2.firstMoment");
  setTimeout(function () {
      $layer2.addClass('activeGrowing');
  }, 400);
  setTimeout(function () {
      $layer2.addClass('activeDecreasing');
  }, 800);
  var $layer2V2 = $("#firstRectanglesGroup .rectanglesAnimation.layer2.secondMoment");
  setTimeout(function () {
      $layer2V2.addClass('activeGrowing');
  }, 1600);
  setTimeout(function () {
      $layer2V2.addClass('activeDecreasing');
  }, 2000);
  var $layer2V3 = $("#firstRectanglesGroup .rectanglesAnimation.layer2.thirdMoment");
  setTimeout(function () {
      $layer2V3.addClass('activeGrowing');
  }, 2800);
  setTimeout(function () {
      $layer2V3.addClass('activeDecreasing');
  }, 3200);


});


/*trying to repeat the animation of the rectangles*/

  $.fn.rectangleInViewport = function() {
    var elementTop = $(this).offset().top;
    var viewportTop = $(window).scrollTop();
    return viewportTop >= elementTop-300;
  };

  $.fn.prueba2 = function() {
    var elementTop = $(this).offset().top;
    var viewportTop = $(window).scrollTop();
    return viewportTop <= elementTop;
  };

  var lastScrollTop = 0;

  $(window).on('load resize scroll', function() {
    var st = $(this).scrollTop();
    // console.log($("#textRectangles").offset().top);
    // console.log($(window).scrollTop());

    $('#textRectangles').each(function() {
      if ($(this).rectangleInViewport()) {
        var $layer1 = $("#secondRectanglesGroup #firstRectanglesGroup .rectanglesAnimation.layer1.firstMoment");
        setTimeout(function () {
            $layer1.addClass('activeGrowing');
        }, 000);
        setTimeout(function () {
            $layer1.addClass('activeDecreasing');
        }, 400);
        var $layer1V2 = $("#secondRectanglesGroup .rectanglesAnimation.layer1.secondMoment");
        setTimeout(function () {
            $layer1V2.addClass('activeGrowing');
        }, 1200);
        setTimeout(function () {
            $layer1V2.addClass('activeDecreasing');
        }, 1600);
        var $layer1V3 = $("#secondRectanglesGroup .rectanglesAnimation.layer1.thirdMoment");
        setTimeout(function () {
            $layer1V3.addClass('activeGrowing');
        }, 2400);
        setTimeout(function () {
            $layer1V3.addClass('activeDecreasing');
        }, 2800);


        var $layer2 = $("#secondRectanglesGroup .rectanglesAnimation.layer2.firstMoment");
        setTimeout(function () {
            $layer2.addClass('activeGrowing');
        }, 400);
        setTimeout(function () {
            $layer2.addClass('activeDecreasing');
        }, 800);
        var $layer2V2 = $("#secondRectanglesGroup .rectanglesAnimation.layer2.secondMoment");
        setTimeout(function () {
            $layer2V2.addClass('activeGrowing');
        }, 1600);
        setTimeout(function () {
            $layer2V2.addClass('activeDecreasing');
        }, 2000);
        var $layer2V3 = $("#secondRectanglesGroup .rectanglesAnimation.layer2.thirdMoment");
        setTimeout(function () {
            $layer2V3.addClass('activeGrowing');
        }, 2800);
        setTimeout(function () {
            $layer2V3.addClass('activeDecreasing');
        }, 3200);


        var $layer3 = $("#secondRectanglesGroup .rectanglesAnimation.layer3.firstMoment");
        setTimeout(function () {
            $layer3.addClass('activeGrowing');
        }, 800);
        setTimeout(function () {
            $layer3.addClass('activeDecreasing');
        }, 1200);
        var $layer3V2 = $("#secondRectanglesGroup .rectanglesAnimation.layer3.secondMoment");
        setTimeout(function () {
            $layer3V2.addClass('activeGrowing');
        }, 2000);
        setTimeout(function () {
            $layer3V2.addClass('activeDecreasing');
        }, 2400);
        var $layer3V3 = $("#secondRectanglesGroup .rectanglesAnimation.layer3.thirdMoment");
        setTimeout(function () {
            $layer3V3.addClass('activeGrowing');
        }, 3200);
        setTimeout(function () {
            $layer3V3.addClass('activeDecreasing');
        }, 3600);
        // console.log("in");
      }

    });
    lastScrollTop = st;
  });


/*attempt to move image with mouse position*/

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.landingImg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


/*until here*/





  /*Fit images in fullscreen*/
  var $windowHeight = $(window).height();
  var $windowWidth = $(window).width();
  var $windowRatio = $windowWidth / $windowHeight;
  var $bgImg = $("#ArbeitGalleryEl1");
  var $bgImgHeight = $("#ArbeitGalleryEl1").height();
  var $bgImgWidth = $("#ArbeitGalleryEl1").width();
  var $bgImgRatio = $bgImgWidth /$bgImgHeight;

  function correctBgEl1(){
    if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl1").width() / $("#ArbeitGalleryEl1").height())) {
      $("#ArbeitGalleryEl1").addClass("corrected");
    }
  }
  function correctBgEl2(){
    if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl2").width() / $("#ArbeitGalleryEl2").height())) {
      $("#ArbeitGalleryEl2").addClass("corrected");
    }
  }
  function correctBgEl3(){
    if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl3").width() / $("#ArbeitGalleryEl3").height())) {
      $("#ArbeitGalleryEl3").addClass("corrected");
    }
  }
  function correctBgEl4(){
    if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl4").width() / $("#ArbeitGalleryEl4").height())) {
      $("#ArbeitGalleryEl4").addClass("corrected");
    }
  }


  function ArbeitFsController(){

    var $ArbeitFsGalleryControllerEl1 = $("#ArbeitFsGalleryControllerEl1");
    var $ArbeitFsGalleryControllerEl2 = $("#ArbeitFsGalleryControllerEl2");
    var $ArbeitFsGalleryControllerEl3 = $("#ArbeitFsGalleryControllerEl3");
    var $ArbeitFsGalleryControllerEl4 = $("#ArbeitFsGalleryControllerEl4");

    var $ArbeitGalleryEl1 = $("#ArbeitGalleryEl1");
    var $ArbeitGalleryEl2 = $("#ArbeitGalleryEl2");
    var $ArbeitGalleryEl3 = $("#ArbeitGalleryEl3");
    var $ArbeitGalleryEl4 = $("#ArbeitGalleryEl4");


    $ArbeitFsGalleryControllerEl1.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl1.addClass("active");
      } else {
        $ArbeitGalleryEl1.removeClass('active');
      }
    }, {offset: "25%"} );
    $ArbeitFsGalleryControllerEl1.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl1.removeClass("active");
      } else {
        $ArbeitGalleryEl1.addClass('active');
      }
    }, {offset: "-100%"} );


    $ArbeitFsGalleryControllerEl2.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl2.addClass("active");
      } else {
        $ArbeitGalleryEl2.removeClass('active');
      }
    }, {offset: "25%"} );
    $ArbeitFsGalleryControllerEl2.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl2.removeClass("active");
      } else {
        $ArbeitGalleryEl2.addClass('active');
      }
    }, {offset: "-100%"} );


    $ArbeitFsGalleryControllerEl3.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl3.addClass("active");
      } else {
        $ArbeitGalleryEl3.removeClass('active');
      }
    }, {offset: "25%"} );
    $ArbeitFsGalleryControllerEl3.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl3.removeClass("active");
      } else {
        $ArbeitGalleryEl3.addClass('active');
      }
    }, {offset: "-100%"} );



    $ArbeitFsGalleryControllerEl4.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl4.addClass("active");
      } else {
        $ArbeitGalleryEl4.removeClass('active');
      }
    }, {offset: "25%"} );
    $ArbeitFsGalleryControllerEl4.waypoint(function(direction) {
      if (direction == "down"){
        $ArbeitGalleryEl4.removeClass("active");
      } else {
        $ArbeitGalleryEl4.addClass('active');
      }
    }, {offset: "-100%"} );

    }

    $(window).on("load resize scroll",function(e){
        ArbeitFsController();
    });

    /*until here*/



    /*small animation single images*/

    var lastScrollTop = 0;

    $(window).on('load resize scroll', function() {

      $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementTop <= viewportBottom - $(window).height()/4;
      };

      var st = $(this).scrollTop();

      $('.single-img-container').each(function() {
        if ($(this).isInViewport() && !$(this).hasClass('activeSingleImg')) {
          $(this).addClass("activeSingleImg");
          console.log("in");
        }
      });

      $('.single-img-container-push').each(function() {
        if ($(this).isInViewport() && !$(this).hasClass('activeSingleImg')) {
          $(this).addClass("activeSingleImg");
          console.log("in");
        }
      });

      lastScrollTop = st;
      });
    /*until here*/




});
