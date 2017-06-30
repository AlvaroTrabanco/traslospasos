$(document).ready(function(){
  console.log("start!");


// $(".landingImageClipped").addClass("clipAction");

/*landing*/
var $landing = $(".landingImage");

$landing.waypoint(function(direction) {
  if (direction == "down"){
    $landing.fadeOut(500);
  } else{
    $landing.fadeIn(500);
  }

}, {offset: "-100%"} );

// $landing.waypoint(function(direction) {
//   if(direction == "up"){
//     $landing.fadeIn(500);
//
//   }else{
//     $landing.fadeOut(200);
//
//   }
// }, {offset: "botom-in-view"});
/*until here*/
















  /*Audio with text*/
  var $introAudio = $("#introAudio");
  var $firstAudio = $("#firstAudio");
  var $secondAudio = $("#secondAudio");
  var $thirdAudio = $("#thirdAudio");

  var $introAudioMarker = $("#introAudioMarker");
  var $firstAudioMarker = $("#firstAudioMarker");
  var $secondAudioMarker = $("#secondAudioMarker");
  var $thirdAudioMarker = $("#thirdAudioMarker");
  var $exitingText = $("#stopAudio");
  var $exitingIntro = $("#stopAudioIntro");


  $introAudioMarker.waypoint(function(){
    $introAudio.get(0).play();
    $introAudio.animate({volume: 1}, 2000);
  }, {offset: "bottom-in-view"}
  );
  $firstAudioMarker.waypoint(function(){
    $firstAudio.get(0).play();
    $firstAudio.animate({volume: 1}, 2000);
  }, {offset: "bottom-in-view"}
  );
  $secondAudioMarker.waypoint(function(){
    $secondAudio.get(0).play();
    $secondAudio.animate({volume: 1}, 2000);
  }, {offset: "bottom-in-view"}
  );
  $thirdAudioMarker.waypoint(function(){
    $thirdAudio.get(0).play();
    $thirdAudio.animate({volume: 1}, 2000);
  }, {offset: "bottom-in-view"}
  );

  $exitingText.waypoint(function(){
    $firstAudio.animate({volume: 0}, 2000);
    $secondAudio.animate({volume: 0}, 2000);
    $thirdAudio.animate({volume: 0}, 2000);
  });
  $exitingIntro.waypoint(function(){
    $introAudio.animate({volume: 0}, 2000);
  });
  /*until here*/

















  /*Fadein/out gallery according to a certain word*/
  var $markerFadeImg1 = $("#markerFadeImg1");
  var $singleImgFade1 = $("#imgFadeIntro1");
  var $singleImgFade2 = $("#imgFadeIntro2");
  var $singleImgFade3 = $("#imgFadeIntro3");
  var $singleImgFade4 = $("#imgFadeIntro4");
  var $fadingImagesDiv = $(".fadingImages");
  var $singleImgSmall = $(".fadingImages img");

  var $fullScreenContainer = $("#fullScreenImages1");
  var $fullScreenImages = $(".fullscreenImages img");

  function checkSize(){
      if ($(".singleImgFadingContainer").css("position") == "fixed" ){


        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade1.addClass("active");
          } else {
            $singleImgFade1.removeClass('active');
          }
        }, {offset: "120%"} );
        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade1.removeClass("active");
          } else {
            $singleImgFade1.addClass('active');
          }
        }, {offset: "90%"} );


        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade2.addClass("active");
          } else {
            $singleImgFade2.removeClass('active');
          }
        }, {offset: "90%"} );
        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade2.removeClass("active");
          } else {
            $singleImgFade2.addClass('active');
          }
        }, {offset: "60%"} );


        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade3.addClass("active");
          } else {
            $singleImgFade3.removeClass('active');
          }
        }, {offset: "60%"} );
        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade3.removeClass("active");
          } else {
            $singleImgFade3.addClass('active');
          }
        }, {offset: "30%"} );


        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade4.addClass("active");
          } else {
            $singleImgFade4.removeClass('active');
          }
        }, {offset: "30%"} );
        $markerFadeImg1.waypoint(function(direction) {
          if (direction == "down"){
            $singleImgFade4.removeClass("active");
          } else {
            $singleImgFade4.addClass('active');
          }
        }, {offset: "0%"} );

      } else {
        $(".fadingImages p").addClass("visible");
        $singleImgSmall.each(function() {
          $(this).waypoint(function(direction) {
            if (direction == "down"){
              $(this.element).addClass("active");
            } else {
              $(this.element).removeClass('active');
            }
          }, {offset: "80%"});

          $(this).waypoint(function(direction) {
            if (direction == "down"){
              $(this.element).removeClass("active");
            } else {
              $(this.element).addClass('active');
            }
          }, {offset: "-20%"});
        });
    }
  }

  // run test on initial page load
  checkSize();

  // run test on resize of the window
  $(window).resize(checkSize);
/*until here*/






/*Code for fullscreen gallery controlled by blocks with text inside*/
  var $exFsGalleryControllerEl1 = $("#exFsGalleryControllerEl1");
  var $exFsGalleryControllerEl2 = $("#exFsGalleryControllerEl2");
  var $exFsGalleryControllerEl3 = $("#exFsGalleryControllerEl3");

  var $exGalleryEl1 = $("#exGalleryEl1");
  var $exGalleryEl2 = $("#exGalleryEl2");
  var $exGalleryEl3 = $("#exGalleryEl3");

  $exFsGalleryControllerEl1.waypoint(function(direction) {
    if (direction == "down"){
      $exGalleryEl1.addClass("active");
    } else {
      $exGalleryEl1.removeClass('active');
    }
  }, {offset: "0"} );
  $exFsGalleryControllerEl1.waypoint(function(direction) {
    if (direction == "down"){
      $exGalleryEl1.removeClass("active");
    } else {
      $exGalleryEl1.addClass('active');
    }
  }, {offset: "-100%"} );


  $exFsGalleryControllerEl2.waypoint(function(direction) {
    if (direction == "down"){
      $exGalleryEl2.addClass("active");
    } else {
      $exGalleryEl2.removeClass('active');
    }
  }, {offset: "0"} );
  $exFsGalleryControllerEl2.waypoint(function(direction) {
    if (direction == "down"){
      $exGalleryEl2.removeClass("active");
    } else {
      $exGalleryEl2.addClass('active');
    }
  }, {offset: "-100%"} );


  $exFsGalleryControllerEl3.waypoint(function(direction) {
    if (direction == "down"){
      $exGalleryEl3.addClass("active");
    } else {
      $exGalleryEl3.removeClass('active');
    }
  }, {offset: "0"} );
  $exFsGalleryControllerEl3.waypoint(function(direction) {
    if (direction == "down"){
      $exGalleryEl3.removeClass("active");
    } else {
      $exGalleryEl3.addClass('active');
    }
  }, {offset: "-100%"} );
  /*until here*/



  /*Fit images in fullscreen*/
  var $windowHeight = $(window).height();
  var $bgImg = $(".bgFsImg img");
  var $bgImgHeight = $(".bgFsImg img").height();

  function correctBg(){
    if ($windowHeight > $bgImgHeight) {
      $bgImg.addClass("corrected");
      console.log("working");
    }else{
      $bgImg.removeClass("corrected");
    }
  }

  correctBg();
  /*until here*/









  /*Fullscreen background gallery*/
  var cuencasMinerasHeight = $("#cuencasMineras").height();
  $(".bgControllerEl").css("height", cuencasMinerasHeight/4);//this number should change according to the number of images you want to display

  var $cuencasMinerasController1 = $("#cuencasMinerasController1");
  var $cuencasMinerasController2 = $("#cuencasMinerasController2");
  var $cuencasMinerasController3 = $("#cuencasMinerasController3");
  var $cuencasMinerasController4 = $("#cuencasMinerasController4");

  var $bgCuenca1 = $("#bgCuenca1 img");
  var $bgCuenca2 = $("#bgCuenca2 img");
  var $bgCuenca3 = $("#bgCuenca3 img");
  var $bgCuenca4 = $("#bgCuenca4 img");


  $cuencasMinerasController1.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca1.addClass("active");
    } else {
      $bgCuenca1.removeClass('active');
    }
  }, {offset: "0"} );
  $cuencasMinerasController1.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca1.removeClass("active");
    } else {
      $bgCuenca1.addClass('active');
    }
  }, {offset: function() {
    return -this.element.clientHeight}  });


  $cuencasMinerasController2.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca2.addClass("active");
    } else {
      $bgCuenca2.removeClass('active');
    }
  }, {offset: "0"} );
  $cuencasMinerasController2.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca2.removeClass("active");
    } else {
      $bgCuenca2.addClass('active');
    }
  }, {offset: function() {
    return -this.element.clientHeight} } );



  $cuencasMinerasController3.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca3.addClass("active");
    } else {
      $bgCuenca3.removeClass('active');
    }
  }, {offset: "0"} );
  $cuencasMinerasController3.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca3.removeClass("active");
    } else {
      $bgCuenca3.addClass('active');
    }
  }, {offset: function() {
    return -this.element.clientHeight} } );


  $cuencasMinerasController4.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca4.addClass("active");
    } else {
      $bgCuenca4.removeClass('active');
    }
  }, {offset: "0"} );
  $cuencasMinerasController4.waypoint(function(direction) {
    if (direction == "down"){
      $bgCuenca4.removeClass("active");
    } else {
      $bgCuenca4.addClass('active');
    }
  }, {offset: function() {
    return -this.element.clientHeight} } );
/*until here*/







/*clearfix from right alignment*/
  $('.text-right').after('<div class="clearfix"></div>');
  $('.text-far-right').after('<div class="clearfix"></div>');
  $('.text-far-far-right').after('<div class="clearfix"></div>');
  $('.single-img-right').after('<div class="clearfix"></div>');
  $('.single-img-far-right').after('<div class="clearfix"></div>');
  $('.single-img-far-far-right').after('<div class="clearfix"></div>');
/*until here*/



// legend stuff. Needs revision

var $imgMarker1 = $("#imgMarker1");
$imgMarker1.waypoint(function() {
  $("#imgMarker1").siblings(".legend").toggleClass("active");
}, {offset: "20%"});

var $imgMarker2 = $("#imgMarker2");
$imgMarker2.waypoint(function() {
  $("#imgMarker2").siblings(".legend").toggleClass("active");
}, {offset: "20%"});





//timeline stuff
var $timelineMarker1 = $("#timelineMarker1");
var $timelineFirst = $("#timeline-first");
// var $timelineMarker2 = $("#timelineMarker2");
// var $timelineSecond = $("#timeline-second");
// var $timelineMarker3 = $("#timelineMarker3");
// var $timelineThird = $("#timeline-third");
// var $timelineMarker4 = $("#timelineMarker4");
// var $timelineFourth = $("#timeline-fourth");
var $vigneteTimeline = $("#vignete");

$timelineMarker1.waypoint(function(direction) {
  if(direction == "down"){
    $timelineFirst.fadeIn(500);
    $vigneteTimeline.fadeIn(500);
    console.log("I should be seen");
  } else{
    $timelineFirst.fadeOut(200);
    $vigneteTimeline.fadeOut(300);
    console.log("I should have disappeared");
  }
}, {offset: "70%"} );

$timelineMarker1.waypoint(function(direction) {
  if(direction == "up"){
    $timelineFirst.fadeIn(500);
    $vigneteTimeline.fadeIn(500)
  }else{
    $timelineFirst.fadeOut(200);
    $vigneteTimeline.fadeOut(300);
  }
}, {offset: "100px"});
//until here














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
  $('.hamburger-slim').click(function(){
    console.log('hice click en el hamburger');
    $('#menu').addClass('enabled');
    $('body').addClass('stop-scrolling');
  });
  $('#menu button').click(function(){
      $('#menu').removeClass('enabled');
      $('body').removeClass('stop-scrolling');
  });


var $hamburger = $(".hamburger-slim");

function hideMenu(){
    if ($("#menu").css("display") == "inherit") {
        console.log("icon should be hidden");
        $hamburger.addClass("hide");
    } else {
        $hamburger.removeClass("hide");
        console.log("icon should be visible");
    }
  }

hideMenu();
$(window).resize(hideMenu);

/*until here*/





  /*pinning video*/

  var controller = new ScrollMagic.Controller();

  var pinVideo = new ScrollMagic.Scene({
    triggerElement: '#videoA',
    triggerHook: 0,
    duration: "150%"
  })
  .setPin("#videoA")
  .addIndicators({
    name: "video pin",
    colorTrigger: "yellow",
    colorStart: "white"
  })
  .addTo(controller);

  var pinVideoB = new ScrollMagic.Scene({
    triggerElement: '#videoB',
    triggerHook: 0,
    duration: "150%"
  })
  .setPin("#videoB")
  .addIndicators({
    name: "video pin B",
    colorTrigger: "yellow",
    colorStart: "white",
    intent: "200"
  })
  .addTo(controller);
  /*until here*/


  /*pinned images*/
  $(function() {
      var controller = new ScrollMagic.Controller();
      $(".imgpin").each(function () {
        new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0,
          duration: "100%"
        })
        .setPin(this, {pushFollowers:false})
        .addTo(controller)
        .addIndicators({
          name: "imgpin",
          colorTrigger: "orange",
          colorStart: "white",
          indent: "200"
        });
      });
  });



  // $(function(){
  //   var controller = new ScrollMagic.Controller();
  //   $(".landing").each(function(){
  //     new ScrollMagic.Scene({
  //       triggerElement: this,
  //       triggerHook: 0,
  //       duration: "150%"
  //     })
  //     .setPin(this, {pushFollowers:true})
  //     .addTo(controller)
  //     .addIndicators({
  //       name: "landingpage",
  //       colorTrigger: "blue",
  //       colorStart: "white",
  //       indent: "200"
  //     });
  //   });
  // });
  /*until here*/



  /*youtube video playing when visible*/
  window.onYouTubePlayerAPIReady = function(){

    var LoadVideo = function(player_id){

      var Program = {
        Init: function(){
            this.NewPlayer();
            this.EventHandler();
        },

        NewPlayer: function(){
            var _this = this;
            this.Player = new YT.Player(player_id, {});
            _this.Player.$element = $('#' + player_id);
        },

        Play: function(){
        	if( this.Player.getPlayerState() === 1 ) return;
            this.Player.playVideo();
        },

        Pause: function(){
        	if( this.Player.getPlayerState() === 2 ) return;
            this.Player.pauseVideo();
        },

        ScrollControl: function(){
        	if( Utils.IsElementInViewport(this.Player.$element[0]) ) this.Play();
            else this.Pause();
        },

        EventHandler: function(){
            var _this = this;
            $(window).on('scroll', function(){
                _this.ScrollControl();
            });
        }

      };

      var Utils = {


          IsElementInViewport: function(el){
              if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
              var rect = el.getBoundingClientRect();
              // console.log(rect);
              return (
                  rect.top >= -1000 &&
                  rect.left >= -2000 &&
                  rect.bottom <= (window.innerHeight*2 || document.documentElement.clientHeight) &&
                  rect.right <= (window.innerWidth*2 || document.documentElement.clientWidth)
              );
          }

      };

      return Program.Init();

    };

    LoadVideo('playerA');
    LoadVideo('playerB');

  }
  /*until here*/









});
