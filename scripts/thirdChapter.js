$(document).ready(function(){
  console.log("start!");



  /*Audio with text*/
  var $introAudio = $("#introAudio");
  var $introAudioMarker = $("#introAudioMarker");

  var $audioPlotTwist = $("#audioPlotTwist");
  var $audioPlotTwistMarker = $("#plotTwist");

  var $audio1 = $("#audio1");
  var $audio1Marker = $("#audio1Marker");

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

    $.fn.someHowVisible = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementTop < viewportTop && elementBottom > viewportBottom;
    };

    $.fn.visibleBottom = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementTop < viewportBottom && elementBottom > viewportBottom;
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

    $('#plotTwist').each(function() {
      if ($(this).someHowVisible() && !$(this).hasClass('played')) {
        $("#audioPlotTwist").get(0).play();
        $audioPlotTwist.stop(true,true);
        $("#audioPlotTwist").animate({volume: 1}, 200);
        $("#plotTwist").addClass("played");
        // console.log("in");
      } else if (!$(this).someHowVisible()){
        $("#audioPlotTwist").animate({volume: 0}, 1000);
        // console.log("OUT_down");
      }
    });

    $('#galleryEugenia').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio1").get(0).play();
        $audio1.stop(true,true);
        $("#audio1").animate({volume: 1}, 200);
        $("#galleryEugenia").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio1").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#galleryEzequiel').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio2").get(0).play();
        $("#audio2").stop(true,true);
        $("#audio2").animate({volume: 1}, 200);
        $("#galleryEzequiel").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio2").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#galleryJose').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio3").get(0).play();
        $("#audio3").stop(true,true);
        $("#audio3").animate({volume: 1}, 200);
        $("#galleryJose").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio3").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#textIntroduction').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio4").get(0).play();
        $("#audio4").stop(true,true);
        $("#audio4").animate({volume: 1}, 200);
        $("#textIntroduction").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio4").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#wayToGermany').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio5").get(0).play();
        $("#audio5").stop(true,true);
        $("#audio5").animate({volume: 1}, 200);
        $("#wayToGermany").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio5").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#JoseStory').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio6").get(0).play();
        $("#audio6").stop(true,true);
        $("#audio6").animate({volume: 1}, 200);
        $("#JoseStory").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio6").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#EugeniaStory').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio7").get(0).play();
        $("#audio7").stop(true,true);
        $("#audio7").animate({volume: 1}, 200);
        $("#EugeniaStory").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio7").animate({volume: 0}, 1000);
        // console.log("out");
      }
    });

    $('#secondChapterEnd').each(function() {
      if ($(this).visibleBottom() && !$(this).hasClass('played')) {
        $("#audio8").get(0).play();
        $("#audio8").stop(true,true);
        $("#audio8").animate({volume: 1}, 200);
        $("#secondChapterEnd").addClass("played");
        // console.log("in");
      } else if (!$(this).visibleBottom()){
        $("#audio8").animate({volume: 0}, 1000);
        // console.log("out");
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
  $('html,body').animate({ scrollTop:$("#beginning").offset().top}, 500);
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
      $('#menu').addClass('enabled');
      $('body').addClass('stop-scrolling');
    });
    $('#menu button').click(function(){
        $('#menu').removeClass('enabled');
        $('body').removeClass('stop-scrolling');
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


  var $layer3 = $("#firstRectanglesGroup .rectanglesAnimation.layer3.firstMoment");
  setTimeout(function () {
      $layer3.addClass('activeGrowing');
  }, 800);
  setTimeout(function () {
      $layer3.addClass('activeDecreasing');
  }, 1200);
  var $layer3V2 = $("#firstRectanglesGroup .rectanglesAnimation.layer3.secondMoment");
  setTimeout(function () {
      $layer3V2.addClass('activeGrowing');
  }, 2000);
  setTimeout(function () {
      $layer3V2.addClass('activeDecreasing');
  }, 2400);
  var $layer3V3 = $("#firstRectanglesGroup .rectanglesAnimation.layer3.thirdMoment");
  setTimeout(function () {
      $layer3V3.addClass('activeGrowing');
  }, 3200);
  setTimeout(function () {
      $layer3V3.addClass('activeDecreasing');
  }, 3600);

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



  /*Fit images in fullscreen*/
  var $windowHeight = $(window).height();
  var $windowWidth = $(window).width();
  var $windowRatio = $windowWidth / $windowHeight;
  var $bgImg = $("#siblingGalleryEl1");
  var $bgImgHeight = $("#siblingGalleryEl1").height();
  var $bgImgWidth = $("#siblingGalleryEl1").width();
  var $bgImgRatio = $bgImgWidth /$bgImgHeight;

  function correctBgEl1(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl1").width() / $("#siblingGalleryEl1").height())) {
      $("#siblingGalleryEl1").addClass("corrected");
    }
  }
  function correctBgEl2(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl2").width() / $("#siblingGalleryEl2").height())) {
      $("#siblingGalleryEl2").addClass("corrected");
    }
  }
  function correctBgEl3(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl3").width() / $("#siblingGalleryEl3").height())) {
      $("#siblingGalleryEl3").addClass("corrected");
    }
  }
  function correctBgEl4(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl4").width() / $("#siblingGalleryEl4").height())) {
      $("#siblingGalleryEl4").addClass("corrected");
    }
  }
  function correctBgEl5(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl5").width() / $("#siblingGalleryEl5").height())) {
      $("#siblingGalleryEl5").addClass("corrected");
    }
  }
  function correctBgEl6(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl6").width() / $("#siblingGalleryEl6").height())) {
      $("#siblingGalleryEl6").addClass("corrected");
    }
  }
  function correctBgEl7(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl7").width() / $("#siblingGalleryEl7").height())) {
      $("#siblingGalleryEl7").addClass("corrected");
    }
  }
  function correctBgEl8(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl8").width() / $("#siblingGalleryEl8").height())) {
      $("#siblingGalleryEl8").addClass("corrected");
    }
  }
  function correctBgEl9(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl9").width() / $("#siblingGalleryEl9").height())) {
      $("#siblingGalleryEl9").addClass("corrected");
    }
  }
  function correctBgEl10(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl10").width() / $("#siblingGalleryEl10").height())) {
      $("#siblingGalleryEl10").addClass("corrected");
    }
  }
  function correctBgEl11(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl11").width() / $("#siblingGalleryEl11").height())) {
      $("#siblingGalleryEl11").addClass("corrected");
    }
  }
  function correctBgEl12(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl12").width() / $("#siblingGalleryEl12").height())) {
      $("#siblingGalleryEl12").addClass("corrected");
    }
  }
  function correctBgEl13(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl13").width() / $("#siblingGalleryEl13").height())) {
      $("#siblingGalleryEl13").addClass("corrected");
    }
  }
  function correctBgEl14(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl14").width() / $("#siblingGalleryEl14").height())) {
      $("#siblingGalleryEl14").addClass("corrected");
    }
  }
  function correctBgEl15(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl15").width() / $("#siblingGalleryEl15").height())) {
      $("#siblingGalleryEl15").addClass("corrected");
    }
  }
  function correctBgEl16(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl16").width() / $("#siblingGalleryEl16").height())) {
      $("#siblingGalleryEl16").addClass("corrected");
    }
  }
  function correctBgEl17(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl17").width() / $("#siblingGalleryEl17").height())) {
      $("#siblingGalleryEl17").addClass("corrected");
    }
  }
  function correctBgEl18(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl18").width() / $("#siblingGalleryEl18").height())) {
      $("#siblingGalleryEl18").addClass("corrected");
    }
  }
  function correctBgEl19(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl19").width() / $("#siblingGalleryEl19").height())) {
      $("#siblingGalleryEl19").addClass("corrected");
    }
  }
  function correctBgEl20(){
    if (($(window).width() / $(window).height()) < ($("#siblingGalleryEl20").width() / $("#siblingGalleryEl20").height())) {
      $("#siblingGalleryEl20").addClass("corrected");
    }
  }



  function correctBgPlot1(){
    if (($(window).width() / $(window).height()) < ($("#plotTwistGalleryEl1").width() / $("#plotTwistGalleryEl1").height())) {
      $("#plotTwistGalleryEl1").addClass("corrected");
    }
  }
  function correctBgPlot2(){
    if (($(window).width() / $(window).height()) < ($("#plotTwistGalleryEl2").width() / $("#plotTwistGalleryEl2").height())) {
      $("#plotTwistGalleryEl2").addClass("corrected");
    }
  }



  var lastScrollTop = 0;
  function siblingFsController(){

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementTop > viewportTop && elementTop < viewportBottom;
    };

    $.fn.someOfItIsInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementTop < viewportBottom && elementBottom > viewportBottom;
    };

    $.fn.mixOfPrevious = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementTop < viewportBottom && elementBottom > viewportBottom;
    };


    var st = $(this).scrollTop();

    $("#galleryEugenia").each(function(){
      if ($(this).someOfItIsInViewport() && !$(this).hasClass("EugeniaActive")){
        $("#titleFirst").prev().remove("#EugeniawithEzequielActive");
        $("#titleFirst").before('<span id="EzequielwithEugeniaActive">Ezequiel</span>');

        $("#titleSecond").prev().remove("#JosewithEzequielActive");
        $("#titleSecond").before('<span id="JosewithEugeniaActive">José Luis</span>');
        $(this).addClass("EugeniaActive");
      }else if (!$(this).someOfItIsInViewport()){
        $("#titleFirst").prev().remove("#EzequielwithEugeniaActive");
        $("#titleSecond").prev().remove("#JosewithEugeniaActive");
        $(this).removeClass("EugeniaActive");
      }
    });

    $("#galleryEzequiel").each(function(){
      if ($(this).someOfItIsInViewport() && !$(this).hasClass("EzequielActive")){
        $("#titleFirst").prev().remove("#EugeniawithJoseActive");
        $("#titleFirst").before('<span id="EugeniawithEzequielActive">Eugenia</span>');

        $("#titleSecond").prev().remove("#EzequielwithJoseActive");
        $("#titleSecond").before('<span id="JosewithEzequielActive">José Luis</span>');
        $(this).addClass("EzequielActive");
      }else if (!$(this).someOfItIsInViewport()){
        $("#titleFirst").prev().remove("#EugeniawithEzequielActive");
        $("#titleSecond").prev().remove("#JosewithEzequielActive");
        $(this).removeClass("EzequielActive");
      }
    });

    $("#galleryJose").each(function(){
      if ($(this).someOfItIsInViewport() && !$(this).hasClass("JoseActive")){
        // $("#titleFirst").prev().remove("#deleteEzequiel");
        $("#titleFirst").before('<span id="EugeniawithJoseActive">Eugenia</span>');

        // $("#titleSecond").prev().remove("#deleteEzequiel");
        $("#titleSecond").before('<span id="EzequielwithJoseActive">Ezequiel</span>');
        $(this).addClass("JoseActive");
      }else if (!$(this).someOfItIsInViewport()){
        $("#titleFirst").prev().remove("#EugeniawithJoseActive");
        $("#titleSecond").prev().remove("#EzequielwithJoseActive");
        $(this).removeClass("JoseActive");
      }
    });



    $('#siblingsGalleriesContainer').each(function() {
      if ($(this).mixOfPrevious()) {
        $(".siblingGalleryNav").addClass("active");
      } else {
        $(".siblingGalleryNav").removeClass("active");
      }
    });





    $('#siblingFsGalleryControllerEl1').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl1").addClass("active");
        $("#siblingGalleryTitle").addClass("siblingGalleryTitleActive");

      } else {
        $("#siblingGalleryEl1").removeClass("active");
        $("#siblingGalleryTitle").removeClass("siblingGalleryTitleActive");
      }
    });


    $('#siblingFsGalleryControllerEl2').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl2").addClass("active");
      } else {
        $("#siblingGalleryEl2").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl3').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl3").addClass("active");
      } else {
        $("#siblingGalleryEl3").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl4').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl4").addClass("active");
      } else {
        $("#siblingGalleryEl4").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl5').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl5").addClass("active");
      } else {
        $("#siblingGalleryEl5").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl6').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl6").addClass("active");
      } else {
        $("#siblingGalleryEl6").removeClass("active");
      }
    });


    $('#siblingFsGalleryControllerEl7').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl7").addClass("active");
        $("#siblingGalleryTitle2").addClass("siblingGalleryTitleActive");

      } else {
        $("#siblingGalleryEl7").removeClass("active");
        $("#siblingGalleryTitle2").removeClass("siblingGalleryTitleActive");
      }
    });

    $('#siblingFsGalleryControllerEl8').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl8").addClass("active");
      } else {
        $("#siblingGalleryEl8").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl9').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl9").addClass("active");
      } else {
        $("#siblingGalleryEl9").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl10').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl10").addClass("active");
      } else {
        $("#siblingGalleryEl10").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl11').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl11").addClass("active");
      } else {
        $("#siblingGalleryEl11").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl12').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl12").addClass("active");
      } else {
        $("#siblingGalleryEl12").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl13').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl13").addClass("active");
      } else {
        $("#siblingGalleryEl13").removeClass("active");
      }
    });


    $('#siblingFsGalleryControllerEl14').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl14").addClass("active");
        $("#siblingGalleryTitle3").addClass("siblingGalleryTitleActive");

      } else {
        $("#siblingGalleryEl14").removeClass("active");
        $("#siblingGalleryTitle3").removeClass("siblingGalleryTitleActive");
      }
    });

    $('#siblingFsGalleryControllerEl15').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl15").addClass("active");
      } else {
        $("#siblingGalleryEl15").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl16').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl16").addClass("active");
      } else {
        $("#siblingGalleryEl16").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl17').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl17").addClass("active");
      } else {
        $("#siblingGalleryEl17").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl18').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl18").addClass("active");
      } else {
        $("#siblingGalleryEl18").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl19').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl19").addClass("active");
      } else {
        $("#siblingGalleryEl19").removeClass("active");
      }
    });

    $('#siblingFsGalleryControllerEl20').each(function() {
      if ($(this).isInViewport()) {
        $("#siblingGalleryEl20").addClass("active");
      } else {
        $("#siblingGalleryEl20").removeClass("active");
      }
    });


    lastScrollTop = st;
}








function plotTwistFsController(){

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop > viewportTop && elementTop < viewportBottom;
  };

  $.fn.someOfItIsInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom && elementBottom > viewportBottom;
  };

  $.fn.mixOfPrevious = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom && elementBottom > viewportBottom;
  };


  var st = $(this).scrollTop();


  $('#plotTwistFsGalleryControllerEl1').each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistGalleryEl1").addClass("active");
      $("#plotTwistTitle").addClass("plotTwistGalleryTitleActive");

    } else {
      $("#plotTwistGalleryEl1").removeClass("active");
      $("#plotTwistTitle").removeClass("plotTwistGalleryTitleActive");
    }
  });


  $('#plotTwistFsGalleryControllerEl2').each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistGalleryEl2").addClass("active");
      $("#plotTwistTitle2").addClass("plotTwistGalleryTitleActive");
    } else {
      $("#plotTwistGalleryEl2").removeClass("active");
      $("#plotTwistTitle2").removeClass("plotTwistGalleryTitleActive");
    }
  });




  lastScrollTop = st;
}





    $(window).on("load resize scroll",function(e){
      correctBgEl1();
      correctBgEl2();
      correctBgEl3();
      correctBgEl4();
      correctBgEl5();
      correctBgEl6();

      correctBgEl7();
      correctBgEl8();
      correctBgEl9();
      correctBgEl10();
      correctBgEl11();
      correctBgEl12();
      correctBgEl13();

      correctBgEl14();
      correctBgEl15();
      correctBgEl16();
      correctBgEl17();
      correctBgEl18();
      correctBgEl19();
      correctBgEl20();
      siblingFsController();

      correctBgPlot1();
      correctBgPlot2();
      plotTwistFsController();
    });



    $("#firstButtonGalleryNav").click(function(){
      if ($("#galleryEugenia").someOfItIsInViewport()){
        $('html,body').animate({ scrollTop:$("#galleryEzequiel").offset().top}, 200);
      } else {
        $('html,body').animate({ scrollTop:$("#galleryEugenia").offset().top}, 200);
      }
    });
    $("#secondButtonGalleryNav").click(function(){
      if ($("#galleryJose").someOfItIsInViewport()){
        $('html,body').animate({ scrollTop:$("#galleryEzequiel").offset().top}, 400);
      } else {
        $('html,body').animate({ scrollTop:$("#galleryJose").offset().top}, 400);
      }
    });
/*until here*/



/*plot Twist texts*/


// $(function() {
//   var controller = new ScrollMagic.Controller();
//   $(".textPin").each(function () {
//     new ScrollMagic.Scene({
//       triggerElement: this,
//       triggerHook: 0,
//       duration: "100%"
//     })
//     .setPin(this, {pushFollowers:true})
//     .addTo(controller)
//   });
// });


var $plotTwistEl1 = $("#plotTwistEl1");
var $plotTwistEl2 = $("#plotTwistEl2");
var $plotTwistEl3 = $("#plotTwistEl3");
var $plotTwistEl4 = $("#plotTwistEl4");
var $plotTwistEl5 = $("#plotTwistEl5");

var lastScrollTop = 0;

$(window).on('load resize scroll', function() {

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportTop && elementBottom > viewportBottom;
  };


  var st = $(this).scrollTop();

  $("#plotTwist").each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwist").addClass("active");
    } else {
      $("#plotTwist").removeClass("active");
    }
  });

  $plotTwistEl1.each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistEl1 .twistElContent").addClass("plotTwistActive");
      $("#plotTwistEl1 .twistElContent").removeClass("plotTwistDisabled");
    } else {
      $("#plotTwistEl1 .twistElContent").removeClass("plotTwistActive");
      $("#plotTwistEl1 .twistElContent").addClass("plotTwistDisabled");
    }
  });

  $plotTwistEl2.each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistEl2 .twistElContent").addClass("plotTwistActive");
      $("#plotTwistEl2 .twistElContent").removeClass("plotTwistDisabled");
    } else {
      $("#plotTwistEl2 .twistElContent").removeClass("plotTwistActive");
      $("#plotTwistEl2 .twistElContent").addClass("plotTwistDisabled");
    }
  });

  $plotTwistEl3.each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistEl3 .twistElContent").addClass("plotTwistActive");
      $("#plotTwistEl3 .twistElContent").removeClass("plotTwistDisabled");
    } else {
      $("#plotTwistEl3 .twistElContent").removeClass("plotTwistActive");
      $("#plotTwistEl3 .twistElContent").addClass("plotTwistDisabled");
    }
  });

  $plotTwistEl4.each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistEl4 .twistElContent").addClass("plotTwistActive");
      $("#plotTwistEl4 .twistElContent").removeClass("plotTwistDisabled");
    } else {
      $("#plotTwistEl4 .twistElContent").removeClass("plotTwistActive");
      $("#plotTwistEl4 .twistElContent").addClass("plotTwistDisabled");
    }
  });

  $plotTwistEl5.each(function() {
    if ($(this).isInViewport()) {
      $("#plotTwistEl5 .twistElContent").addClass("plotTwistActive");
      $("#plotTwistEl5 .twistElContent").removeClass("plotTwistDisabled");
    } else {
      $("#plotTwistEl5 .twistElContent").removeClass("plotTwistActive");
      $("#plotTwistEl5 .twistElContent").addClass("plotTwistDisabled");
    }
  });
  lastScrollTop = st;
});


/*until here*/







/*pinned images*/

  $(function() {
      var controller = new ScrollMagic.Controller();
      $(".imgpinNoPush").each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0,
          duration: "100%"
        })
        .setPin(this, {pushFollowers:false})
        .addTo(controller)
      });
  });

  $(function() {
      var controller = new ScrollMagic.Controller();
      $(".imgpinNoPushShorter").each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0,
          duration: "80%"
        })
        .setPin(this, {pushFollowers:false})
        .addTo(controller)
      });
  });

  $(function() {
      var controller = new ScrollMagic.Controller();
      $(".imgpinNoPushLonger").each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0,
          duration: "120%"
        })
        .setPin(this, {pushFollowers:false})
        .addTo(controller)
      });
  });

  $(function() {
      var controller = new ScrollMagic.Controller();
      $(".imgpin").each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0,
          duration: "50%"
        })
        .setPin(this, {pushFollowers:true})
        .addTo(controller)
      });
  });

  $(function() {
      var controller = new ScrollMagic.Controller();
      $(".imgPinLonger").each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0,
          duration: "200%"
        })
        .setPin(this, {pushFollowers:true})
        .addTo(controller)
      });
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
      // console.log("in");
    }
  });

  $('.single-img-container-push').each(function() {
    if ($(this).isInViewport() && !$(this).hasClass('activeSingleImg')) {
      $(this).addClass("activeSingleImg");
      // console.log("in");
    }
  });

  lastScrollTop = st;
  });
/*until here*/


/*old times in Asturias*/


  var $markerFadeAsPortas = $("#markerFadeAsPortas");
  var $singleImgFadeAsPortas1 = $("#imgFadeAsPortas1");
  var $singleImgFadeAsPortas2 = $("#imgFadeAsPortas2");
  var $singleImgFadeAsPortas3 = $("#imgFadeAsPortas3");



  function asPortasFading(){
    if ($(".singleImgFadingContainer").css("position") == "fixed" ){
      $markerFadeAsPortas.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeAsPortas1.addClass("active");
        } else {
          $singleImgFadeAsPortas1.removeClass('active');
        }
      }, {offset: "140%"} );
      $markerFadeAsPortas.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeAsPortas1.removeClass("active");
        } else {
          $singleImgFadeAsPortas1.addClass('active');
        }
      }, {offset: "70%"} );

      $markerFadeAsPortas.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeAsPortas2.addClass("active");
        } else {
          $singleImgFadeAsPortas2.removeClass('active');
        }
      }, {offset: "70%"} );
      $markerFadeAsPortas.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeAsPortas2.removeClass("active");
        } else {
          $singleImgFadeAsPortas2.addClass('active');
        }
      }, {offset: "0%"} );

      $markerFadeAsPortas.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeAsPortas3.addClass("active");
        } else {
          $singleImgFadeAsPortas3.removeClass('active');
        }
      }, {offset: "0%"} );
      $markerFadeAsPortas.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeAsPortas3.removeClass("active");
        } else {
          $singleImgFadeAsPortas3.addClass('active');
        }
      }, {offset: "-70%"} );
    }
  }

  asPortasFading();
  $(window).resize(asPortasFading);

/*until here*/


/*single Images with extra info*/
  $('.imgInfo').before('<div class="imgInfoButton"><p style="color:white;">+</p></div>');



  $('.imgInfoButton').click(function(){
    $(".imgInfoButton").toggleClass("used");

    if ($(".imgInfoButton").hasClass("used")){
      $('body').on('scroll mousewheel touchmove', stopScrolling);
      $("#darkScreen").removeClass("noDisplay");
      $(this).addClass("rotate45");
      $(this).parents().addClass("zIndexHigh");
      $(this).siblings().addClass("doDisplay");
      $('html,body').animate({ scrollTop:$(this).offset().top}, 500);
    }else{
      $('body').off('scroll mousewheel touchmove', stopScrolling);
      $("#darkScreen").addClass("noDisplay");
      $(this).removeClass("rotate45");
      $(this).parents().removeClass("zIndexHigh");
      $(this).siblings().removeClass("doDisplay");
    }
  });



  function stopScrolling (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
  }


/*until here*/

/*pin videos*/
var controller = new ScrollMagic.Controller();

// var pinVideoHorse = new ScrollMagic.Scene({
//   triggerElement: '#playerHorse',
//   triggerHook: 0,
//   duration: "100%"
// })
// .setPin("#playerHorse")
// .addTo(controller);


var pinVideoWindwheel = new ScrollMagic.Scene({
  triggerElement: '#playerWindwheel',
  triggerHook: 0,
  duration: "100%"
})
.setPin("#playerWindwheel")
.addTo(controller);

var pinVideoLandscape = new ScrollMagic.Scene({
  triggerElement: '#playerLandscape',
  triggerHook: 0,
  duration: "100%"
})
.setPin("#playerLandscape")
.addTo(controller);

/*until here*/



// /*attempt unrelated stories*/
$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("#JusSection2", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("#JusSection3",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    // .fromTo("#JusSection4", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    .fromTo("#JusSection5", 1, {y: "200%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#JusSection",
      triggerHook: "onLeave",
      duration: "450%"
    })
    .setPin("#JusSection")
    .setTween(wipeAnimation)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});


$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("#EzgiEmilienSection2", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("#EzgiEmilienSection3", 1, {x:  "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    // .fromTo("#EzgiEmilienSection4", 1, {x: "100%", y: "-100%"}, {x: "0%", y: "0%", ease: Linear.easeNone}) // in from top
    .fromTo("#EzgiEmilienSection5", 1, {y: "200%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#EzgiEmilienSection",
      triggerHook: "onLeave",
      duration: "450%"
    })
    .setPin("#EzgiEmilienSection")
    .setTween(wipeAnimation)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});



$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("#CanberkChiaraSection2", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("#CanberkChiaraSection3",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    // .fromTo("#CanberkChiaraSection4", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    .fromTo("#CanberkChiaraSection5", 1, {y: "200%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#CanberkChiaraSection",
      triggerHook: "onLeave",
      duration: "450%"
    })
    .setPin("#CanberkChiaraSection")
    .setTween(wipeAnimation)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
// /*until here*/

});
