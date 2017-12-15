$(document).ready(function(){
  console.log("start!");






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





/*Fadein/out gallery according to a certain word. Beginning of chapter*/
  var $markerFadeImg1 = $("#markerFadeImg1");
  var $singleImgFade1 = $("#imgFadeIntro1");
  var $singleImgFade2 = $("#imgFadeIntro2");

  function checkSize(){
    if ($("#imgFadingContainerIntro").css("position") == "fixed" ){
      $markerFadeImg1.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFade1.addClass("active");
        } else {
          $singleImgFade1.removeClass('active');
        }
      }, {offset: "100%"} );
      $markerFadeImg1.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFade1.removeClass("active");
        } else {
          $singleImgFade1.addClass('active');
        }
      }, {offset: "50%"} );


      $markerFadeImg1.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFade2.addClass("active");
        } else {
          $singleImgFade2.removeClass('active');
        }
      }, {offset: "50%"} );
      $markerFadeImg1.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFade2.removeClass("active");
        } else {
          $singleImgFade2.addClass('active');
        }
      }, {offset: "0%"} );

    }
  }

  // run test on initial page load
  checkSize();

  // run test on resize of the window
  $(window).resize(checkSize);
/*until here*/




/*Fadein/out gallery according to a certain word. Pepita's life*/
  var $markerFadePepita = $("#markerFadePepita");
  var $singleImgFadePepita1 = $("#imgFadePepita1");
  var $singleImgFadePepita2 = $("#imgFadePepita2");
  var $singleImgFadePepita3 = $("#imgFadePepita3");

  function pepitaFadingSide(){
    if ($("#imgFadingContainerPepita").css("position") == "fixed" ){
      $markerFadePepita.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadePepita1.addClass("active");
        } else {
          $singleImgFadePepita1.removeClass('active');
        }
      }, {offset: "100%"} );
      $markerFadePepita.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadePepita1.removeClass("active");
        } else {
          $singleImgFadePepita1.addClass('active');
        }
      }, {offset: "66%"} );


      $markerFadePepita.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadePepita2.addClass("active");
        } else {
          $singleImgFadePepita2.removeClass('active');
        }
      }, {offset: "66%"} );
      $markerFadePepita.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadePepita2.removeClass("active");
        } else {
          $singleImgFadePepita2.addClass('active');
        }
      }, {offset: "33%"} );

      $markerFadePepita.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadePepita3.addClass("active");
        } else {
          $singleImgFadePepita3.removeClass('active');
        }
      }, {offset: "33%"} );
      $markerFadePepita.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadePepita3.removeClass("active");
        } else {
          $singleImgFadePepita3.addClass('active');
        }
      }, {offset: "0%"} );
    }
  }
  $(window).on("load resize",function(){
    pepitaFadingSide();
  });
/*until here*/



//now with Lola
var $markerFadeLola = $("#markerFadeLola");
var $singleImgFadeLola1 = $("#imgFadeLola1");
var $singleImgFadeLola2 = $("#imgFadeLola2");

function checkSizeLola(){
  if ($("#imgFadingContainerLola").css("position") == "fixed" ){
    $markerFadeLola.waypoint(function(direction) {
      if (direction == "down"){
        $singleImgFadeLola1.addClass("active");

      } else {
        $singleImgFadeLola1.removeClass('active');
      }
    }, {offset: "100%"} );
    $markerFadeLola.waypoint(function(direction) {
      if (direction == "down"){
        $singleImgFadeLola1.removeClass("active");
      } else {
        $singleImgFadeLola1.addClass('active');
      }
    }, {offset: "50%"} );


    $markerFadeLola.waypoint(function(direction) {
      if (direction == "down"){
        $singleImgFadeLola2.addClass("active");
      } else {
        $singleImgFadeLola2.removeClass('active');
      }
    }, {offset: "50%"} );
    $markerFadeLola.waypoint(function(direction) {
      if (direction == "down"){
        $singleImgFadeLola2.removeClass("active");
      } else {
        $singleImgFadeLola2.addClass('active');
      }
    }, {offset: "0%"} );



  }
}



/*until here*/





/*pinned videos*/
  var controller = new ScrollMagic.Controller();




  var pinVideoRoad = new ScrollMagic.Scene({
    triggerElement: '#playerRoad',
    triggerHook: 0,
    duration: "100%"
  })
  .setPin("#playerRoad")
  .addTo(controller);


  var pinVideoFamily = new ScrollMagic.Scene({
    triggerElement: '#playerFamily',
    triggerHook: 0,
    duration: "100%"
  })
  .setPin("#playerFamily")
  .addTo(controller);





  /*until here*/


  //timeline stuff
  var $timelineMarker1 = $("#timelineMarker1");
  var $timeline1 = $("#timeline1");
  var $timelineMarker2 = $("#timelineMarker2");
  var $timeline2 = $("#timeline2");
  var $timelineMarker3 = $("#timelineMarker3");
  var $timeline3 = $("#timeline3");
  // var $timelineMarker4 = $("#timelineMarker4");
  // var $timelineFourth = $("#timeline-fourth");
  // var $vigneteTimeline = $("#vignete");

  $timelineMarker1.waypoint(function(direction) {
    if(direction == "down"){
      $timeline1.animate({ opacity: 1 })
    } else{
      $timeline1.animate({ opacity: 0 })
    }
  }, {offset: "75%"} );

  $timelineMarker1.waypoint(function(direction) {
    if(direction == "up"){
      $timeline1.animate({ opacity: 1 })
    }else{
      $timeline1.animate({ opacity: 0 })
    }
  }, {offset: "25%"});
  //
  $timelineMarker2.waypoint(function(direction) {
    if(direction == "down"){
      $timeline2.animate({ opacity: 1 })
    } else{
      $timeline2.animate({ opacity: 0 })
    }
  }, {offset: "75%"} );

  $timelineMarker2.waypoint(function(direction) {
    if(direction == "up"){
      $timeline2.animate({ opacity: 1 })
    }else{
      $timeline2.animate({ opacity: 0 })
    }
  }, {offset: "25%"});

  $timelineMarker3.waypoint(function(direction) {
    if(direction == "down"){
      $timeline3.animate({ opacity: 1 })
    } else{
      $timeline3.animate({ opacity: 0 })
    }
  }, {offset: "75%"} );

  $timelineMarker3.waypoint(function(direction) {
    if(direction == "up"){
      $timeline3.animate({ opacity: 1 })
    }else{
      $timeline3.animate({ opacity: 0 })
    }
  }, {offset: "25%"});
  //until here


/*more button*/


$('#familyEzequiel .seeMoreButton').click(function(){

  $("#beginningfamilyEzequiel.beginningSectionPhoto").addClass("noHeight noOpacity");
  $("#seeMoreFamilyEzequiel.extraContentLoad").addClass("fullHeight doDisplay");
  $("#familyEzequiel .hiddenTitleMore").addClass("fullOpacity");
  setTimeout(function () {
    $("#seeLessFamily").addClass("fullOpacity");
  }, 1000);
  $('html,body').animate({ scrollTop:$("#familyEzequiel .hiddenTitleMore").offset().top}, 500);
  var cuencasMinerasHeight = $("#moreInfoCuencaNalon").height();
  $(".bgControllerEl").css("height", cuencasMinerasHeight/2);
  // checkSize();
  // pepitaFadingSide();
  // checkSizeHouse();
  // checkSizeJuntos();
  // cuencaBackgroundImages();
  // ArbeitFsController();
  setTimeout(function () {
    checkSizeLola();
  }, 1000);

});

$('#seeLessFamily').click(function(){
  $("#beginningfamilyEzequiel.beginningSectionPhoto").removeClass("noHeight noOpacity");
  $("#seeMoreFamilyEzequiel.extraContentLoad").removeClass("fullHeight doDisplay");
  $("#familyEzequiel .hiddenTitleMore").removeClass("fullOpacity");
  $("#seeLessFamily").removeClass("fullOpacity");

  pepitaFadingSide();
});



$('#seeMoreCuenca').click(function(){
  $("#CuencaNalonBeginning.beginningSectionVideo").addClass("noHeight noOpacity");
  // setTimeout(function () {
  //   // $("#videoFamilyIntro").remove();
  //   $("#videoCuenca").addClass("noDisplay");
  //   $("#videoCuenca").css("transform", "translateY(-500px)");
  // }, 1000);
  setTimeout(function () {
    $("#seeLessCuenca").addClass("fullOpacity");
  }, 1000);

  $("#seeMoreCuencaNalon.extraContentLoad").addClass("fullHeight");
  $("#seeMoreCuencaNalon.extraContentLoad").addClass("doDisplay");
  $('html,body').animate({ scrollTop:$("#CuencaNalon .hiddenTitleMore").offset().top}, 500);
  var cuencasMinerasHeight = $("#moreInfoCuencaNalon").height();
  $(".bgControllerEl").css("height", cuencasMinerasHeight/2);
  checkSize();
  pepitaFadingSide();
  // checkSizeHouse();
  // checkSizeJuntos();
  // cuencaBackgroundImages();

  setTimeout(function () {
    $(window).on("load resize",function(){
     correctBgCuencaEl1();
     correctBgCuencaEl2();
     correctBgCuencaEl3();
     correctBgCuencaEl4();
     correctBgCuencaEl5();
     correctBgCuencaEl6();

     cuencaFsController();
   });

  }, 2000);

  // ArbeitFsController();
});

$('#seeLessCuenca').click(function(){
  $("#CuencaNalonBeginning.beginningSectionVideo").removeClass("noHeight noOpacity");
  $("#seeLessCuenca").removeClass("fullOpacity");
  $("#seeMoreCuencaNalon.extraContentLoad").removeClass("fullHeight");
  $("#seeMoreCuencaNalon.extraContentLoad").removeClass("doDisplay");
  $("#posterCuencaNalon").removeClass("noOpacity");

  pepitaFadingSide();
});



$('#Ricardo .seeMoreButton').click(function(){

  $("#beginningRicardo.beginningSectionPhoto").addClass("noHeight noOpacity");
  $("#seeMoreRicardo.extraContentLoad").addClass("fullHeight doDisplay");
  $("#Ricardo .hiddenTitleMore").addClass("fullOpacity");
  setTimeout(function () {
    $("#seeLessRicardo").addClass("fullOpacity");
  }, 1000);
  $('html,body').animate({ scrollTop:$("#Ricardo .hiddenTitleMore").offset().top}, 500);
  var ricardoHeight = $("#moreInfoRicardo").height();
  $(".bgControllerEl").css("height", ricardoHeight/2);
  checkSize();
  pepitaFadingSide();
  // checkSizeHouse();
  // checkSizeJuntos();
  // cuencaBackgroundImages();
  // ArbeitFsController();
});

$('#seeLessRicardo').click(function(){
  $("#beginningRicardo.beginningSectionPhoto").removeClass("noHeight noOpacity");
  $("#seeMoreRicardo.extraContentLoad").removeClass("fullHeight doDisplay");
  $("#Ricardo .hiddenTitleMore").removeClass("fullOpacity");
  $("#seeLessRicardo").removeClass("fullOpacity");

  pepitaFadingSide();
});
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


/*hamburger button*/
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
/*until here*/


/*attempt animation of rectangles*/
$(window).on('load resize', function() {
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

$(window).on('mousemove', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;


});

moveBackground();



/*until here*/










  var $markerFadeHouse = $("#markerFadeHouse");
  var $singleImgFadeHouse1 = $("#imgFadeHouse1");
  var $singleImgFadeHouse2 = $("#imgFadeHouse2");


  function checkSizeHouse(){
    if ($("#imgFadingContainerHouse").css("position") == "fixed" ){
      $markerFadeHouse.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeHouse1.addClass("active");

        } else {
          $singleImgFadeHouse1.removeClass('active');
        }
      }, {offset: "100%"} );
      $markerFadeHouse.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeHouse1.removeClass("active");
        } else {
          $singleImgFadeHouse1.addClass('active');
        }
      }, {offset: "50%"} );


      $markerFadeHouse.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeHouse2.addClass("active");
        } else {
          $singleImgFadeHouse2.removeClass('active');
        }
      }, {offset: "50%"} );
      $markerFadeHouse.waypoint(function(direction) {
        if (direction == "down"){
          $singleImgFadeHouse2.removeClass("active");
        } else {
          $singleImgFadeHouse2.addClass('active');
        }
      }, {offset: "0%"} );



    }

  }

  // run test on initial page load

  checkSizeHouse();

  // run test on resize of the window
  $(window).resize(checkSizeHouse);





  /*Fadein/out gallery according to a certain word. Together in Germany*/
    var $markerFadeJuntosImg1 = $("#markerFadeJuntosImg1");
    var $singleImgFadeJuntos1 = $("#imgFadeJuntos1");
    var $singleImgFadeJuntos2 = $("#imgFadeJuntos2");

    function checkSizeJuntos(){
      if ($("#imgFadingContainerJuntos").css("position") == "fixed" ){
        $markerFadeJuntosImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFadeJuntos1.addClass("active");
          } else {
            $singleImgFadeJuntos1.removeClass('active');
          }
        }, {offset: "100%"} );
        $markerFadeJuntosImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFadeJuntos1.removeClass("active");
          } else {
            $singleImgFadeJuntos1.addClass('active');
          }
        }, {offset: "50%"} );


        $markerFadeJuntosImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFadeJuntos2.addClass("active");
          } else {
            $singleImgFadeJuntos2.removeClass('active');
          }
        }, {offset: "50%"} );
        $markerFadeJuntosImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFadeJuntos2.removeClass("active");
          } else {
            $singleImgFadeJuntos2.addClass('active');
          }
        }, {offset: "0%"} );



      }
    }

    // run test on initial page load
    checkSizeJuntos();

    // run test on resize of the window
    $(window).resize(checkSizeJuntos());
  /*until here*/



/*attempt to put all the events launched by scroll together*/
$(window).on("load resize",function(){
  function correctBgCuencaEl1(){
    if (($(window).width() / $(window).height()) < ($("#cuencaGalleryEl1").width() / $("#cuencaGalleryEl1").height())) {
      $("#cuencaGalleryEl1").addClass("corrected");
    }
  }
  function correctBgCuencaEl2(){
    if (($(window).width() / $(window).height()) < ($("#cuencaGalleryEl2").width() / $("#cuencaGalleryEl2").height())) {
      $("#cuencaGalleryEl2").addClass("corrected");
    }
  }
  function correctBgCuencaEl3(){
    if (($(window).width() / $(window).height()) < ($("#cuencaGalleryEl3").width() / $("#cuencaGalleryEl3").height())) {
      $("#cuencaGalleryEl3").addClass("corrected");
    }
  }
  function correctBgCuencaEl4(){
    if (($(window).width() / $(window).height()) < ($("#cuencaGalleryEl4").width() / $("#cuencaGalleryEl4").height())) {
      $("#cuencaGalleryEl4").addClass("corrected");
    }
  }
  function correctBgCuencaEl5(){
    if (($(window).width() / $(window).height()) < ($("#cuencaGalleryEl5").width() / $("#cuencaGalleryEl5").height())) {
      $("#cuencaGalleryEl5").addClass("corrected");
    }
  }
  function correctBgCuencaEl6(){
    if (($(window).width() / $(window).height()) < ($("#cuencaGalleryEl6").width() / $("#cuencaGalleryEl6").height())) {
      $("#cuencaGalleryEl6").addClass("corrected");
    }
  }




  function ArbeitCheckSize(){
    function correctBgArbeitEl1(){
      if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl1").width() / $("#ArbeitGalleryEl1").height())) {
        $("#ArbeitGalleryEl1").addClass("corrected");
      }
    }
    function correctBgArbeitEl2(){
      if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl2").width() / $("#ArbeitGalleryEl2").height())) {
        $("#ArbeitGalleryEl2").addClass("corrected");
      }
    }
    function correctBgArbeitEl3(){
      if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl3").width() / $("#ArbeitGalleryEl3").height())) {
        $("#ArbeitGalleryEl3").addClass("corrected");
      }
    }
    function correctBgArbeitEl4(){
      if (($(window).width() / $(window).height()) < ($("#ArbeitGalleryEl4").width() / $("#ArbeitGalleryEl4").height())) {
        $("#ArbeitGalleryEl4").addClass("corrected");
      }
    }
  }
});




$(window).on("load resize scroll",function(){
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  $.fn.withinViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return viewportTop <= elementTop && viewportBottom >= elementBottom;
  };

  $.fn.somehowOutOfViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementBottom <= viewportTop || elementTop >= viewportBottom;
  };

  $.fn.someOfItIsInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementTop < viewportBottom && elementBottom > viewportBottom;
  };

  $.fn.bottomInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementBottom < viewportBottom - $(window).height()/4;
  };

  $.fn.enteringInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementTop <= viewportBottom - $(window).height()/4;
  };


  /*pinning functions*/
  $.fn.hitsTop = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementTop < viewportTop;
  };
  $.fn.hitsTopUsed = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementBottom > viewportTop;
  };
  $.fn.afterPin = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementBottom < viewportTop;
  };
  $.fn.afterPinUsed = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    return elementBottom > viewportBottom;
  };
  /*end of pinning functions*/

          /*audio while reading*/
  var $introAudio = $("#introAudio");
  var $introAudioGrillos = $("#introAudioGrillos");
  var $introAudioMetalNoise = $("#introAudioMetalNoise");
  var $maquinaCoserAudio = $("#maquinaCoserAudio");
  var $endAudio = $("#endAudio");
  var $introMusic = $("#introMusic");

  $('#introAudioMarker').each(function() {
    if ($(this).withinViewport() && !$(this).hasClass('played')) {
      $("#introAudio").get(0).play();
      $introAudio.stop(true,true);
      $("#introAudio").animate({volume: 1}, 200);
      $("#introAudioMarker").addClass("played");
      // console.log("in");
    } else if ($(this).somehowOutOfViewport()) {
      $("#introAudio").animate({volume: 0}, 1000);
      $("#introAudioMarker").removeClass("played");
      // console.log("OUT_down");
    }
  });

  $('#introMusicMarker').each(function() {
    if ($(this).withinViewport() && !$(this).hasClass('played')) {
      $("#introMusic").get(0).play();
      $introMusic.stop(true,true);
      $("#introMusic").animate({volume: 1}, 200);
      $("#introMusicMarker").addClass("played");
      // console.log("in");
    } else if ($(this).somehowOutOfViewport()) {
      $("#introMusic").animate({volume: 0}, 2000);
      $("#introMusicMarker").removeClass("played");
      // console.log("OUT_down");
    }
  });

  $('#introAudioMetalNoiseMarker').each(function() {
    if ($(this).withinViewport() && !$(this).hasClass('played')) {
      $("#introAudioMetalNoise").get(0).play();
      $introAudioMetalNoise.stop(true,true);
      $("#introAudioMetalNoise").animate({volume: 0.08}, 500);
      $("#introAudioMetalNoiseMarker").addClass("played");

      // console.log("in");
    } else if ($(this).somehowOutOfViewport()) {
      $("#introAudioMetalNoise").animate({volume: 0}, 2000);
      $("#introAudioMetalNoiseMarker").removeClass("played");
      // console.log("OUT_down");
    }
  });

  $('#introAudioGrillosMarker').each(function() {
    if ($(this).withinViewport() && !$(this).hasClass('played')) {
      $("#introAudioGrillos").get(0).play();
      $introAudioGrillos.stop(true,true);
      $("#introAudioGrillos").animate({volume: 1}, 200);
      $("#introAudioGrillosMarker").addClass("played");

      // console.log("in");
    } else if ($(this).somehowOutOfViewport()) {
      $("#introAudioGrillos").animate({volume: 0}, 2000);
      $("#introAudioGrillosMarker").removeClass("played");
      // console.log("OUT_down");
    }
  });

  $('#maquinaCoserAudioMarker').each(function() {
    if ($(this).withinViewport() && !$(this).hasClass('played')) {
      $("#maquinaCoserAudio").get(0).play();
      $maquinaCoserAudio.stop(true,true);
      $("#maquinaCoserAudio").animate({volume: 0.5}, 200);
      $("#maquinaCoserAudioMarker").addClass("played");

      // console.log("in");
    } else if ($(this).somehowOutOfViewport()) {
      $("#maquinaCoserAudio").animate({volume: 0}, 2000);
      $("#maquinaCoserAudioMarker").removeClass("played");
    }
  });

  $('#endAudioMarker').each(function() {
    setTimeout(function () {
      if ($("#endAudioMarker").withinViewport() && !$(this).hasClass('played')) {
        $("#endAudio").get(0).play();
        $endAudio.stop(true,true);
        $("#endAudio").animate({volume: 1}, 500);
        $("#endAudioMarker").addClass("played");
      } else if ($("#endAudioMarker").somehowOutOfViewport()) {
        $("#endAudio").animate({volume: 0}, 2000);
        $("#endAudioMarker").removeClass("played");
      }
    }, 1000);
  });
          /*end of audio while reading*/


          /*landing activity*/
  $('#landingFadeOutMarker').each(function() {
    if ($(this).withinViewport()) {
      $(".landingImage").removeClass("noOpacity");
      $(".landingText").removeClass("noOpacity");
      $(".scrollCalling").removeClass("noOpacity");
      $(".firstRectanglesGroup").addClass("noOpacity");
    } else if ($(this).somehowOutOfViewport()) {
      $(".landingImage").addClass("noOpacity");
      $(".landingText").addClass("noOpacity");
      $(".scrollCalling").addClass("noOpacity");
      $(".firstRectanglesGroup").addClass("noOpacity");
    }
  });
          /*end of landing activity*/



          /*fs gallery of Cuenca*/
    $('#cuencaFsGalleryControllerEl1').each(function() {
      if ($(this).someOfItIsInViewport()) {
        // console.log("at least working in general");
        $("#cuencaGalleryEl1").addClass("active");
      } else {
        $("#cuencaGalleryEl1").removeClass("active");
      }
    });

    $('#cuencaFsGalleryControllerEl2').each(function() {
      if ($(this).someOfItIsInViewport()) {
        $("#cuencaGalleryEl2").addClass("active");
      } else {
        $("#cuencaGalleryEl2").removeClass("active");
      }
    });

    $('#cuencaFsGalleryControllerEl3').each(function() {
      if ($(this).someOfItIsInViewport()) {
        $("#cuencaGalleryEl3").addClass("active");
      } else {
        $("#cuencaGalleryEl3").removeClass("active");
      }
    });

    $('#cuencaFsGalleryControllerEl4').each(function() {
      if ($(this).someOfItIsInViewport()) {
        $("#cuencaGalleryEl4").addClass("active");
      } else {
        $("#cuencaGalleryEl4").removeClass("active");
      }
    });

    $('#cuencaFsGalleryControllerEl5').each(function() {
      if ($(this).someOfItIsInViewport()) {
        $("#cuencaGalleryEl5").addClass("active");
      } else {
        $("#cuencaGalleryEl5").removeClass("active");
      }
    });

    $('#cuencaFsGalleryControllerEl6').each(function() {
      if ($(this).someOfItIsInViewport()) {
        $("#cuencaGalleryEl6").addClass("active");
      } else {
        $("#cuencaGalleryEl6").removeClass("active");
      }
    });
          /*end of fs gallery of Cuenca*/



          /* fading end of sections*/
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
          /*end of fading sections*/


          /*map path walking*/
    var pathController = $("#pathController");

    if (pathController.withinViewport()) {
      $("#mapaSvg").addClass("fullOpacity")
      $("#germanyPath").addClass("activePath");
      $("#mapaSvg div img").addClass("activePath");
    }else{
      setTimeout(function () {
        $("#mapaSvg").removeClass("fullOpacity")
      }, 1000);
      $("#germanyPath").removeClass("activePath");
      $("#mapaSvg div img").removeClass("activePath");
    }
            /*end of map path*/




            /*arbeit fs gallery*/
      $('#ArbeitFsGalleryControllerEl1').each(function() {
        if ($(this).someOfItIsInViewport()) {
          // console.log("at least working in general");
          $("#ArbeitGalleryEl1").addClass("active");
        } else {
          $("#ArbeitGalleryEl1").removeClass("active");
        }
      });

      $('#ArbeitFsGalleryControllerEl2').each(function() {
        if ($(this).someOfItIsInViewport()) {
          $("#ArbeitGalleryEl2").addClass("active");
        } else {
          $("#ArbeitGalleryEl2").removeClass("active");
        }
      });

      $('#ArbeitFsGalleryControllerEl3').each(function() {
        if ($(this).someOfItIsInViewport()) {
          $("#ArbeitGalleryEl3").addClass("active");
        } else {
          $("#ArbeitGalleryEl3").removeClass("active");
        }
      });

      $('#ArbeitFsGalleryControllerEl4').each(function() {
        if ($(this).someOfItIsInViewport()) {
          $("#ArbeitGalleryEl4").addClass("active");
        } else {
          $("#ArbeitGalleryEl4").removeClass("active");
        }
      });

      $('#ArbeitFsGalleryControllerEl5').each(function() {
        if ($(this).someOfItIsInViewport()) {
          $("#ArbeitGalleryEl5").addClass("active");
        } else {
          $("#ArbeitGalleryEl5").removeClass("active");
        }
      });

      $('#ArbeitFsGalleryControllerEl6').each(function() {
        if ($(this).someOfItIsInViewport()) {
          $("#ArbeitGalleryEl6").addClass("active");
        } else {
          $("#ArbeitGalleryEl6").removeClass("active");
        }
      });
          /*end of arbeit fs gallery*/


          /*pinning system*/
    $('.pinLauncher').each(function() {
        var pinTop = $(this).offset().top - $(window).scrollTop();
        var pinTopMove = pinTop *-1;
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight() - $(window).scrollTop();

        if ($(this).hitsTop() && !$(this).siblings().hasClass("fixed") && !$(this).siblings().hasClass("pinUsed")) {
          $(this).siblings().removeClass("moveOn");
          $(this).siblings().addClass("fixed");
          $(this).siblings().addClass("pinUsed");
          $(this).siblings().css("top", 0);
        } else if ($(this).afterPin() && !$(this).siblings().hasClass("moveOn")) {
          $(this).siblings().removeClass("fixed");
          $(this).siblings().addClass("moveOn");
          $(this).siblings().css("top", "100vh");
        } else if ($(this).hitsTopUsed() && !$(this).siblings().hasClass("fixed") && $(this).siblings().hasClass("pinUsed")) {
          $(this).siblings().removeClass("moveOn");
          $(this).siblings().removeClass("pinUsed");
          $(this).siblings().addClass("fixed");
          $(this).siblings().css("top", "0");
        }
        else if ($(this).afterPinUsed() && $(this).siblings().hasClass("fixed")) {
          $(this).siblings().addClass("moveOn");
          $(this).siblings().removeClass("fixed");
        }
      });
          /*end of pinning system*/


          /*small animations of single images*/
      $('.single-img-container').each(function() {
        if ($(this).enteringInViewport() && !$(this).hasClass('activeSingleImg')) {
          $(this).addClass("activeSingleImg");
        }
      });

      $('.single-img-container-push').each(function() {
        if ($(this).enteringInViewport() && !$(this).hasClass('activeSingleImg')) {
          $(this).addClass("activeSingleImg");
        }
      });

});
/*until here*/



$(".mouse").click(function(){
  $('html,body').animate({ scrollTop:$(".introduction").offset().top}, 500);
});



});
