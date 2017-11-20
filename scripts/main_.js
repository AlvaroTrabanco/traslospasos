$(document).ready(function(){
  console.log("start!");



  /*Audio with text*/
  var $introAudio = $("#introAudio");
  var $introAudioMarker = $("#introAudioMarker");

  var $introMusic = $("#introMusic");
  var $introMusicMarker = $("#introMusicMarker");

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $.fn.isNotInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom < viewportTop || elementTop > viewportBottom;
  };

  var lastScrollTop = 0;

  $(window).on('load resize scroll', function() {
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

    $('#introMusicMarker').each(function() {
      if ($(this).isInViewport() && !$(this).hasClass('played')) {
        $("#introMusic").get(0).play();
        $introMusic.stop(true,true);
        $("#introMusic").animate({volume: 1}, 200);
        $("#introMusicMarker").addClass("played");
        // console.log("in");
      } else if ($(this).isNotInViewport()) {
        $("#introMusic").animate({volume: 0}, 2000);
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
  $('html,body').animate({ scrollTop:$("#introduction").offset().top}, 500);
});
/*until here*/





/*landing*/
  // var $landing = $(".landingImage");
  //
  // $landing.waypoint(function(direction) {
  //   if (direction == "down"){
  //     $landing.fadeOut(500);
    // }
    // } else{
    //   $landing.fadeIn(500);
    // }

  // }, {offset: "-100%"} );
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
        // .addIndicators({
        //   name: "imgpin",
        //   colorTrigger: "black",
        //   colorStart: "black",
        //   indent: "0"
        // });
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
        // .addIndicators({
        //   name: "imgpin",
        //   colorTrigger: "black",
        //   colorStart: "black",
        //   indent: "0"
        // });
      });
  });

  //
  // $(function() {
  //     var controller = new ScrollMagic.Controller();
  //     $("#familyEzequiel").each(function () {
  //       new ScrollMagic.Scene({
  //         triggerElement: this,
  //         triggerHook: "onLeave"
  //       })
  //       .setPin(this, {pushFollowers:true})
  //       .addTo(controller)
  //       .addIndicators({
  //         name: "imgpin",
  //         colorTrigger: "black",
  //         colorStart: "black",
  //         indent: "0"
  //       });
  //     });
  // });
  //




/*until here*/



/*Fadein/out gallery according to a certain word. Beginning of chapter*/
  var $markerFadeImg1 = $("#markerFadeImg1");
  var $singleImgFade1 = $("#imgFadeIntro1");
  var $singleImgFade2 = $("#imgFadeIntro2");

  function checkSize(){
    if ($(".singleImgFadingContainer").css("position") == "fixed" ){
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
    // else {
    //   $(".fadingImages p").addClass("visible");
    //   $singleImgSmall.each(function() {
    //     $(this).waypoint(function(direction) {
    //       if (direction == "down"){
    //         $(this.element).addClass("active");
    //       } else {
    //         $(this.element).removeClass('active');
    //       }
    //     }, {offset: "80%"});
    //
    //     $(this).waypoint(function(direction) {
    //       if (direction == "down"){
    //         $(this.element).removeClass("active");
    //       } else {
    //         $(this.element).addClass('active');
    //       }
    //     }, {offset: "-20%"});
    //   });
    // }
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

  function checkSize2(){
    if ($(".singleImgFadingContainer").css("position") == "fixed" ){
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
      }, {offset: "10%"} );


    }
    // else {
    //   $(".fadingImages p").addClass("visible");
    //   $singleImgSmall.each(function() {
    //     $(this).waypoint(function(direction) {
    //       if (direction == "down"){
    //         $(this.element).addClass("active");
    //       } else {
    //         $(this.element).removeClass('active');
    //       }
    //     }, {offset: "80%"});
    //
    //     $(this).waypoint(function(direction) {
    //       if (direction == "down"){
    //         $(this.element).removeClass("active");
    //       } else {
    //         $(this.element).addClass('active');
    //       }
    //     }, {offset: "-20%"});
    //   });
    // }
  }

  // run test on initial page load

  checkSize2();

  // run test on resize of the window
  $(window).resize(checkSize2);

/*until here*/








    /*Fullscreen background gallery*/
    var cuencasMinerasHeight = $("#moreInfoCuencaNalon").height();
    $(".bgControllerEl").css("height", cuencasMinerasHeight/2);//this number should change according to the number of images you want to display

    var $cuencasMinerasController1 = $("#cuencasMinerasController1");
    var $cuencasMinerasController2 = $("#cuencasMinerasController2");


    var $bgCuenca1 = $("#bgCuenca1 img");
    var $bgCuenca2 = $("#bgCuenca2 img");
    /*sections transitions*/
    $.fn.CuencaInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return viewportTop >= elementTop && viewportTop <= elementBottom;
    };



    var lastScrollTop = 0;


    function cuencaBackgroundImages(){
      var st = $(this).scrollTop();

      $('#cuencasMinerasController1').each(function() {
        var $el = $(".bgControllerEl");

        if ($(this).CuencaInViewport() && $("#seeMoreCuencaNalon").hasClass('fullHeight')) {
          $("#bgCuenca1 img").addClass("active");
        }else{
          $("#bgCuenca1 img").removeClass("active");
        }
      });

      $('#cuencasMinerasController2').each(function() {
        var $el = $(".bgControllerEl");

        if ($(this).CuencaInViewport() && $("#seeMoreCuencaNalon").hasClass('fullHeight')) {
          $("#bgCuenca2 img").addClass("active");
          // console.log("in2");
        }else{
          $("#bgCuenca2 img").removeClass("active");
          // console.log("out2");
        }
      });


      lastScrollTop = st;
    }

    // cuencaBackgroundImages();

    $(window).on("load resize scroll",function(e){
        cuencaBackgroundImages();
    });


  /*until here*/



/*pinned videos*/
  var controller = new ScrollMagic.Controller();

  // var pinVideoFamilyIntro = new ScrollMagic.Scene({
  //   triggerElement: '#playerFamilyIntro',
  //   triggerHook: 0,
  //   duration: "100%"
  // })
  // .setPin("#playerFamilyIntro")
  // .addIndicators({
  //   name: " ",
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   indent: "0"
  // })
  // .addTo(controller);



  var pinVideoRoad = new ScrollMagic.Scene({
    triggerElement: '#playerRoad',
    triggerHook: 0,
    duration: "100%"
  })
  .setPin("#playerRoad")
  // .addIndicators({
  //   name: " ",
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   indent: "0"
  // })
  .addTo(controller);


  // var pinVideoFamily = new ScrollMagic.Scene({
  //   triggerElement: '#playerFamily',
  //   triggerHook: 0,
  //   duration: "100%"
  // })
  // .setPin("#playerFamily")
  // .addIndicators({
  //   name: " ",
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   indent: "0"
  // })
  // .addTo(controller);

  /*until here*/



// parallax Scene //
var parallaxTL = new TimelineMax();
parallaxTL
  .from('#familyEzequiel .content-wrapper', 0.5, {autoAlpha: 0, ease:Power0.easeNone}, 1)
  .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
  ;

var slideParallaxScene = new ScrollMagic.Scene({
  triggerElement: "#familyEzequiel .bcg-parallax",
  triggerHook: 1,
  duration: "100%"
})
.setTween(parallaxTL)
.addTo(controller);


var parallaxTL = new TimelineMax();
parallaxTL
  .from('#Ricardo .content-wrapper', 2, {autoAlpha: 0, ease:Power0.easeNone}, 1)
  .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
  ;

var slideParallaxScene = new ScrollMagic.Scene({
  triggerElement: "#Ricardo .bcg-parallax",
  triggerHook: 1,
  duration: "100%"
})
.setTween(parallaxTL)
.addTo(controller);
//until here//




  //
  //
  // /*Timeline */
  // var $timeline1 = $("#timeline1");
  // var $timelineMarker1 = $("#timelineMarker1");
  //
  //
  // $.fn.isInViewport = function() {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();
  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height();
  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };
  //
  // $.fn.isNotInViewport = function() {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();
  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height();
  //   return elementBottom < viewportTop || elementTop > viewportBottom;
  // };
  //
  // var lastScrollTop = 0;
  //
  // $(window).on('load resize scroll', function() {
  //   var st = $(this).scrollTop();
  //
  //   $('#timelineMarker1').each(function() {
  //     if ($(this).isInViewport() && !$("#subtitleIntroFamily").isInViewport()) {
  //       $("#timeline1").removeClass("noOpacity");
  //       console.log("I shouldn't have the class");
  //     } else if ($(this).isInViewport() && $("#subtitleIntroFamily").isInViewport()) {
  //       $("#timeline1").addClass("noOpacity");
  //       console.log("I SHOULD have the class");
  //     } else {
  //       $("#timeline1").addClass("noOpacity");
  //       console.log("I SHOULD have the class");
  //     }
  //   });
  //
  //   $('#timelineMarker2').each(function() {
  //     if ($(this).isInViewport() && !$("#subtitleIntroFamily").isInViewport()) {
  //       $("#timeline2").removeClass("noOpacity");
  //       console.log("I shouldn't have the class");
  //     } else if ($(this).isInViewport() && $("#subtitleIntroFamily").isInViewport()) {
  //       $("#timeline2").addClass("noOpacity");
  //       console.log("I SHOULD have the class");
  //     } else {
  //       $("#timeline2").addClass("noOpacity");
  //       console.log("I SHOULD have the class");
  //     }
  //   });
  //
  //   $('#timelineMarker3').each(function() {
  //     if ($(this).isInViewport() && !$("#subtitleIntroFamily").isInViewport()) {
  //       $("#timeline3").removeClass("noOpacity");
  //       console.log("I shouldn't have the class");
  //     } else if ($(this).isInViewport() && $("#subtitleIntroFamily").isInViewport()) {
  //       $("#timeline3").addClass("noOpacity");
  //       console.log("I SHOULD have the class");
  //     } else {
  //       $("#timelineMarker3").addClass("noOpacity");
  //       console.log("I SHOULD have the class");
  //     }
  //   });
  //
  //
  //
  //   lastScrollTop = st;
  // });
  //
  // /*until here*/


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
  $('html,body').animate({ scrollTop:$("#familyEzequiel .hiddenTitleMore").offset().top}, 500);
  var cuencasMinerasHeight = $("#moreInfoCuencaNalon").height();
  $(".bgControllerEl").css("height", cuencasMinerasHeight/2);
  Waypoint.refreshAll()
  checkSize();
  checkSize2();
  cuencaBackgroundImages();
});

$('#CuencaNalon .seeMoreButton').click(function(){

  $("#CuencaNalonBeginning.beginningSectionTwoColumns").addClass("noHeight noOpacity");
  $("#seeMoreCuencaNalon.extraContentLoad").addClass("fullHeight");
  $("#seeMoreCuencaNalon.extraContentLoad").addClass("doDisplay");
  $('html,body').animate({ scrollTop:$("#CuencaNalon .hiddenTitleMore ").offset().top}, 500);
  var cuencasMinerasHeight = $("#moreInfoCuencaNalon").height();
  $(".bgControllerEl").css("height", cuencasMinerasHeight/2);
  Waypoint.refreshAll()
  checkSize();
  checkSize2();
  cuencaBackgroundImages();
  // checkSize3();
});

$('#Ricardo .seeMoreButton').click(function(){

  $("#beginningRicardo.beginningSectionPhoto").addClass("noHeight noOpacity");
  $("#seeMoreRicardo.extraContentLoad").addClass("fullHeight doDisplay");
  $("#Ricardo .hiddenTitleMore").addClass("fullOpacity");
  $('html,body').animate({ scrollTop:$("#Ricardo .hiddenTitleMore").offset().top}, 500);
  var ricardoHeight = $("#moreInfoRicardo").height();
  $(".bgControllerEl").css("height", ricardoHeight/2);
  Waypoint.refreshAll()
  checkSize();
  checkSize2();
  cuencaBackgroundImages();
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


/*attempt unrelated stories*/
$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    .fromTo("section.panel.endSection", 1, {y: "200%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "600%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
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




});
