
$(document).ready(function(){

  console.log("start!");








  var $markerFadeImg1 = $("#markerFadeImg1");
  var $singleImgFade1 = $("#imgFadeIntro1");
  var $singleImgFade2 = $("#imgFadeIntro2");
  var $singleImgFade3 = $("#imgFadeIntro3");
  var $singleImgFade4 = $("#imgFadeIntro4");
  var $fadingImagesDiv = $(".fadingImages");
  var $singleImgSmall = $(".fadingImages img");



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






/*clearfix from right alignment*/
  $('.text-right').after('<div class="clearfix"></div>');
  $('.text-far-right').after('<div class="clearfix"></div>');
  $('.text-far-far-right').after('<div class="clearfix"></div>');
  $('.single-img-right').after('<div class="clearfix"></div>');
  $('.single-img-far-right').after('<div class="clearfix"></div>');
  $('.single-img-far-far-right').after('<div class="clearfix"></div>');



  // $(".imgMarker1, .imgMarker2").each(function() {
  //    $( this ).waypoint(function() {
  //      $( this ).siblings(".legend").toggleClass("active");
  //      console.log("working");
  //    }, {offset: "20%"});
  // });


var $imgMarker1 = $("#imgMarker1");
$imgMarker1.waypoint(function() {
  $("#imgMarker1").siblings(".legend").toggleClass("active");
}, {offset: "20%"});

var $imgMarker2 = $("#imgMarker2");
$imgMarker2.waypoint(function() {
  $("#imgMarker2").siblings(".legend").toggleClass("active");
}, {offset: "20%"});

//
// $('[id^=imgMarker]').each(function() {
//   var number = this.id.split('_').pop();
// });



var $timelineMarker1 = $("#timelineMarker1");
var $timelineFirst = $("#timeline-first");
var $timelineMarker2 = $("#timelineMarker2");
var $timelineSecond = $("#timeline-second");
var $timelineMarker3 = $("#timelineMarker3");
var $timelineThird = $("#timeline-third");
var $timelineMarker4 = $("#timelineMarker4");
var $timelineFourth = $("#timeline-fourth");
var $vigneteTimeline = $("#vignete");

$timelineMarker1.waypoint(function(direction) {
  if(direction == "down"){
    $timelineFirst.fadeIn(1000);
    $vigneteTimeline.fadeIn(1000);
    console.log("I should be seen");
  } else{
    $timelineFirst.fadeOut(400);
    $vigneteTimeline.fadeOut(500);
    console.log("I should have disappeared");
  }
}, {offset: "70%"} );

$timelineMarker1.waypoint(function(direction) {
  if(direction == "up"){
    $timelineFirst.fadeIn(500);
    $vigneteTimeline.fadeIn(500)
  }else{
    $timelineFirst.fadeOut(400);
    $vigneteTimeline.fadeOut(500);
  }
}, {offset: "100px"});


//
// $timelineMarker2.waypoint(function(direction) {
//   if(direction == "down"){
//     $timelineSecond.fadeIn(1000);
//     $vigneteTimeline.fadeIn(1000);
//     console.log("I should be seen");
//   } else{
//     $timelineSecond.fadeOut(400);
//     $vigneteTimeline.fadeOut(500);
//     console.log("I should have disappeared");
//   }
// }, {offset: "70%"} );
//
// $timelineMarker2.waypoint(function(direction) {
//   if(direction == "up"){
//     $timelineSecond.fadeIn(500);
//     $vigneteTimeline.fadeIn(500)
//   }else{
//     $timelineSecond.fadeOut(400);
//     $vigneteTimeline.fadeOut(500);
//   }
// }, {offset: "100px"});
//
//
//
// $timelineMarker3.waypoint(function(direction) {
//   if(direction == "down"){
//     $timelineThird.fadeIn(1000);
//     $vigneteTimeline.fadeIn(1000);
//     console.log("I should be seen");
//   } else{
//     $timelineThird.fadeOut(400);
//     $vigneteTimeline.fadeOut(500);
//     console.log("I should have disappeared");
//   }
// }, {offset: "70%"} );
//
// $timelineMarker3.waypoint(function(direction) {
//   if(direction == "up"){
//     $timelineThird.fadeIn(500);
//     $vigneteTimeline.fadeIn(500)
//   }else{
//     $timelineThird.fadeOut(400);
//     $vigneteTimeline.fadeOut(500);
//   }
// }, {offset: "100px"});
//
//
//
// $timelineMarker4.waypoint(function(direction) {
//   if(direction == "down"){
//     $timelineFourth.fadeIn(1000);
//     $vigneteTimeline.fadeIn(1000);
//     console.log("I should be seen");
//   } else{
//     $timelineFourth.fadeOut(400);
//     $vigneteTimeline.fadeOut(500);
//     console.log("I should have disappeared");
//   }
// }, {offset: "70%"} );
//
// $timelineMarker4.waypoint(function(direction) {
//   if(direction == "up"){
//     $timelineFourth.fadeIn(500);
//     $vigneteTimeline.fadeIn(500)
//   }else{
//     $timelineFourth.fadeOut(400);
//     $vigneteTimeline.fadeOut(500);
//   }
// }, {offset: "100px"});


/*fade in out single images*/















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






/*menu...*/


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





//init ScrollMagic

  var controller = new ScrollMagic.Controller();

  var pinVideo = new ScrollMagic.Scene({
    triggerElement: '#video',
    triggerHook: 0,
    duration: "150%"
  })
  .setPin("#video")
  .addIndicators({
    name: "video pin",
    colorTrigger: "yellow",
    colorStart: "white"
  })
  .addTo(controller);



  // scroll magic for the height of the element, not viewport
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });
  var imgpin = $(".imgpin");
  var durat = [];
  imgpin.each(function() {
    var h;
    if ($(this).height() < $(window).height()) {
      h = $(this).height();
    } else {
      h = 1;
    }
    durat.push(h);
  });
  imgpin.each(function(index) {
    new ScrollMagic.Scene({
      triggerElement: imgpin.get(index),
      // duration: slides.eq(index).height(),
      duration: durat[index],
      // offset: slides.eq(index - 1 * index).offset().top
      offset: 0
    })
    .setPin(imgpin.get(index), {
      pushFollowers: false
    })
    .addIndicators({
      name: "img pin",
      colorTrigger: "yellow",
      colorStart: "white"
    })
    .addTo(controller);
  });






  /*lazy load*/
    //
    // $(".lazy").recliner({
    //     attrib: "data-src", // selector for attribute containing the media src
    //     throttle: 300,      // millisecond interval at which to process events
    //     threshold: 500,     // scroll distance from element before its loaded
    //     printable: true,    // be printer friendly and show all elements on document print
    //     live: true          // auto bind lazy loading to ajax loaded elements
    // });







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
            return (
                rect.top >= -1000 &&
                rect.left >= -1000 &&
                rect.bottom <= (window.innerHeight*2 || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth*1.5 || document.documentElement.clientWidth)
            );
        }

    };

    return Program.Init();

  };

  LoadVideo('playerA');
  LoadVideo('playerB');
  LoadVideo('playerC');

// or (loop mode)
  $('iframe').each(function(){
  	LoadVideo($(this).attr('id'));
  });
}











});



var event = function(){
  $(this).addClass('articlesInteraction');
}
