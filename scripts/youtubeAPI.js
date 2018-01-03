var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  playerCuenca = new YT.Player('videoCuenca', {
    // playerVars: {
    //   loop: 1
    // },
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'KkY4dZqw0eo',
    events: {
      'onReady': onPlayerReadyCuenca,
      'onStateChange': onPlayerStateChangeCuenca
    }
  });


  playerRoad = new YT.Player('videoRoad', {
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: '6Pfh9XNvthw',
    events: {
      'onReady': onPlayerReadyRoad,
      'onStateChange': onPlayerStateChangeRoad
    }
  });

  playerFamily = new YT.Player('videoFamily', {
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'fNNqpjftFno',
    events: {
      'onReady': onPlayerReadyFamily,
      'onStateChange': onPlayerStateChangeFamily
    }
  });




  playerIntro = new YT.Player('videoIntro', {
    // height: 'auto',
    // width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'vLtp6FOzmS4',
    events: {
      'onReady': onPlayerReadyIntro,
      'onStateChange': onPlayerStateChangeIntro
    }
  });

  playerLandingSecond = new YT.Player('videoSecondChapter', {
    // height: 'auto',
    // width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: '48yOLNBs8CU',
    events: {
      'onReady': onPlayerReadyLandingSecond,
      'onStateChange': onPlayerStateChangeLandingSecond
    }
  });


  playerHorse = new YT.Player('videoHorse', {
    // height: 'auto',
    // width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'myqcm4cx2E4',
    events: {
      'onReady': onPlayerReadyHorse,
      'onStateChange': onPlayerStateChangeHorse
    }
  });

  playerWindwheel = new YT.Player('videoWindwheel', {
    // height: 'auto',
    // width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: '313mMW8E2OI',
    events: {
      'onReady': onPlayerReadyWindwheel,
      'onStateChange': onPlayerStateChangeWindwheel
    }
  });

  playerLandscape = new YT.Player('videoLandscape', {
    // height: 'auto',
    // width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'e4yMYZFnDms',
    events: {
      'onReady': onPlayerReadyLandscape,
      'onStateChange': onPlayerStateChangeLandscape
    }
  });

}

//posters//

var posterRoad = $("#posterRoad");
// var CuencaNalonBeginning = $("#CuencaNalonBeginning");

function onPlayerReadyCuenca(event) {

  var muteButton = document.getElementById("muteButton");

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerCuenca.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerCuenca.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });







  function cuencaVideoSection(){
    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop  && elementTop < viewportBottom;
    };

    var st = $(this).scrollTop();

    if ($(".videoSectionShadow").isInViewport() && !$("#muteButton").hasClass("muted") && !$("#videoCuenca").hasClass("disabledVideo")) {
      playerCuenca.playVideo();
      playerCuenca.unMute();
      setTimeout(function () {
        $("#posterCuencaNalon").addClass("noOpacity");
      }, 1500);
    }else if ($(".videoSectionShadow").isInViewport() && $("#muteButton").hasClass("muted")&& !$("#videoCuenca").hasClass("disabledVideo"))  {
      playerCuenca.playVideo();
      playerCuenca.mute();
      setTimeout(function () {
        $("#posterCuencaNalon").addClass("noOpacity");
      }, 1500);
    }else {
      playerCuenca.stopVideo();
      $("#posterCuencaNalon").removeClass("noOpacity");
    }

  }

  $(window).on("load resize scroll",function(e){
    cuencaVideoSection();
  });
  $('#seeMoreCuenca').click(function(){
    setTimeout(function () {
      playerCuenca.stopVideo();
      $("#videoCuenca").addClass("disabledVideo");
    }, 1000);
  });
  $('#seeLessCuenca').click(function(){
    $("#videoCuenca").removeClass("disabledVideo");
  });

}

function onPlayerStateChangeCuenca(event) {
  if (event.data == 0) {
    playerCuenca.stopVideo();
    $("#posterCuencaNalon").removeClass("noOpacity");
    return false;
  }
}



function onPlayerReadyFamily(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerFamily.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerFamily.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });


  $.fn.videoInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom - $(window).height()/3 && elementBottom > viewportTop + $(window).height()/3;
  };





  $(document).on('load resize scroll', function() {
    var obj = $("#videoFamily");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();



    if ($("#posterFamily").videoInViewport()  && !$("#muteButton").hasClass("muted")) {
      // console.log("I should be playing");
      playerFamily.playVideo();
      playerFamily.unMute();
      setTimeout(function () {
        $("#posterFamily").addClass("noOpacity");
      }, 1500);

    } else if ($("#posterFamily").videoInViewport() && $("#muteButton").hasClass("muted")){
      // console.log("I should be playing");
      playerFamily.playVideo();
      playerFamily.mute();
      setTimeout(function () {
        $("#posterFamily").addClass("noOpacity");
      }, 1500);

    } else{
      // console.log("I should stop");
      playerFamily.stopVideo();
      $("#posterFamily").removeClass("noOpacity");
    }
});
}


function onPlayerStateChangeFamily(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoFamily").offset().top}, 500);
    playerFamily.stopVideo();
    $("#posterFamily").removeClass("noOpacity");


    return false;
  }
}























function onPlayerReadyRoad(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerRoad.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerRoad.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });


  $.fn.videoInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom - $(window).height()/3 && elementBottom > viewportTop + $(window).height()/3;
  };





  $(document).on('load resize scroll', function() {
    var obj = $("#videoRoad");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();



    if ($("#posterRoad").videoInViewport() && !$("#muteButton").hasClass("muted")) {
      // console.log("I should be playing");
      playerRoad.playVideo();
      playerRoad.unMute();
      setTimeout(function () {
        $("#posterRoad").addClass("noOpacity");
      }, 1500);

    } else if ($("#posterRoad").videoInViewport() && $("#muteButton").hasClass("muted")){
      // console.log("I should be playing");
      playerRoad.playVideo();
      playerRoad.mute();
      setTimeout(function () {
        $("#posterRoad").addClass("noOpacity");
      }, 1500);

    } else{
      // console.log("I should stop");
      playerRoad.stopVideo();
      $("#posterRoad").removeClass("noOpacity");

    }
});
}


function onPlayerStateChangeRoad(event) {
  if (event.data == 0) {
    // $('html,body').animate({ scrollTop:$("#afterVideoRoad").offset().top}, 500);
    $("#posterRoad").removeClass("noOpacity");
    playerRoad.stopVideo();
    return false;
  }
}

/*until here*/










/*Intro Tras los pasos*/

function onPlayerReadyIntro(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerIntro.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerIntro.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });





    $(window).on("load resize scroll",function(e) {

      $.fn.videoLandingInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop;
      };



      if ($("#landingFadeOutMarker").videoLandingInViewport() && !$("#muteButton").hasClass("muted")) {
        // console.log("I should be playing unmuted");
        playerIntro.playVideo();
        playerIntro.unMute();
        setTimeout(function () {
          $("#posterIntro").addClass("noOpacity");
        }, 1500);


      } else if ($("#landingFadeOutMarker").videoLandingInViewport() && $("#muteButton").hasClass("muted")){

        playerIntro.playVideo();
        playerIntro.mute();
        setTimeout(function () {
          $("#posterIntro").addClass("noOpacity");
        }, 1500);

      }
      else{
        playerIntro.stopVideo();
        $("#posterIntro").removeClass("noOpacity");
      }
    });


}


function onPlayerStateChangeIntro(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoIntro").offset().top}, 450);
    playerIntro.stopVideo();
    $("#posterIntro").removeClass("noOpacity");
    // $("#posterIntro").fadeIn('10000', function(){
    //   $("#posterIntro").fadeIn();
    // });
    return false;

  }
}

/*until here*/


/*Intro Second Chapter*/

function onPlayerReadyLandingSecond(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerLandingSecond.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerLandingSecond.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });





    $(window).on("load resize scroll",function(e) {

      $.fn.videoLandingInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop;
      };


      var obj = $("#videoSecondChapter");
      var pos = obj.offset();
      var bottom = obj.offset() + obj.outerHeight(true);
      var muteButton = document.getElementById("muteButton");

      var scrollTop = $(window).scrollTop();



      if ($("#landingFadeOutMarker").videoLandingInViewport() && !$("#muteButton").hasClass("muted")) {
        playerLandingSecond.playVideo();
        playerLandingSecond.unMute();
        setTimeout(function () {
          $("#posterSecondChapter").addClass("noOpacity");
        }, 1500);
        console.log("I should be playing");

      } else if ($("#landingFadeOutMarker").videoLandingInViewport() && $("#muteButton").hasClass("muted")){
        playerLandingSecond.playVideo();
        playerLandingSecond.mute();
        setTimeout(function () {
          $("#posterSecondChapter").addClass("noOpacity");
        }, 1500);
      } else {
        playerLandingSecond.stopVideo();
        $("#posterSecondChapter").removeClass("noOpacity");
      }

    });


}


function onPlayerStateChangeLandingSecond(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoSecondChapter").offset().top}, 500);
    playerLandingSecond.stopVideo();
    $("#posterSecondChapter").fadeIn('10000', function(){
      $("#posterSecondChapter").fadeIn();
    });
    return false;

  }
}

/*until here*/



/*Horse separation Germany*/
function onPlayerReadyHorse(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerHorse.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerHorse.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });


  $.fn.videoInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom - $(window).height()/3 && elementBottom > viewportTop + $(window).height()/3;
  };







  $(document).on('load resize scroll', function() {
    var obj = $("#videoHorse");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();


    if ($("#posterHorse").videoInViewport() && !$("#muteButton").hasClass("muted")) {
      // console.log("I should be playing");
      playerHorse.playVideo();
      playerHorse.unMute();
      setTimeout(function () {
        $("#posterHorse").addClass("noOpacity");
      }, 1500);

    } else if ($("#posterHorse").videoInViewport() && $("#muteButton").hasClass("muted")){
      // console.log("I should be playing");
      playerHorse.playVideo();
      playerHorse.mute();
      setTimeout(function () {
        $("#posterHorse").addClass("noOpacity");
      }, 1500);


    } else{
      // console.log("I should stop");
      playerHorse.stopVideo();
      $("#posterHorse").removeClass("noOpacity");

    }
});
}


function onPlayerStateChangeHorse(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoHorse").offset().top}, 500);
    playerHorse.stopVideo();
    return false;
  }
}


/*until here*/



/*Windwheel separation Germany*/
function onPlayerReadyWindwheel(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerWindwheel.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerWindwheel.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });


  $.fn.videoInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom - $(window).height()/3 && elementBottom > viewportTop + $(window).height()/3;
  };





  $(document).on('load resize scroll', function() {
    var obj = $("#videoWindwheel");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();


    if ($("#posterWindwheel").videoInViewport() && !$("#muteButton").hasClass("muted")) {
      // console.log("I should be playing");
      playerWindwheel.playVideo();
      playerWindwheel.unMute();
      setTimeout(function () {
        $("#posterWindwheel").addClass("noOpacity");
      }, 1500);

    } else if ($("#posterWindwheel").videoInViewport() && $("#muteButton").hasClass("muted")){
      // console.log("I should be playing");
      playerWindwheel.playVideo();
      playerWindwheel.mute();
      setTimeout(function () {
        $("#posterWindwheel").addClass("noOpacity");
      }, 1500);


    } else{
      // console.log("I should stop");
      playerWindwheel.stopVideo();
      $("#posterWindwheel").removeClass("noOpacity");

    }
});
}


function onPlayerStateChangeWindwheel(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoWindwheel").offset().top}, 500);
    playerWindwheel.stopVideo();
    return false;
  }
}


/*until here*/





/*Landscape separation Germany*/
function onPlayerReadyLandscape(event) {

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerLandscape.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerLandscape.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });


  $.fn.videoInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementTop < viewportBottom - $(window).height()/3 && elementBottom > viewportTop + $(window).height()/3;
  };


  $(document).on('load resize scroll', function() {
    var obj = $("#videoLandscape");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();


    if ($("#posterLandscape").videoInViewport() && !$("#muteButton").hasClass("muted")) {
      // console.log("I should be playing");
      playerLandscape.playVideo();
      playerLandscape.unMute();
      setTimeout(function () {
        $("#posterLandscape").addClass("noOpacity");
      }, 1500);

    } else if ($("#posterLandscape").videoInViewport() && $("#muteButton").hasClass("muted")){
      // console.log("I should be playing");
      playerLandscape.playVideo();
      playerLandscape.mute();
      setTimeout(function () {
        $("#posterLandscape").addClass("noOpacity");
      }, 1500);


    } else{
      // console.log("I should stop");

      $("#posterLandscape").removeClass("noOpacity");



      setTimeout(function () {
        playerLandscape.stopVideo();
        console.log("I'm actually stopped");
      }, 500);



    }
});
}


function onPlayerStateChangeLandscape(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoLandscape").offset().top}, 500);
    $("#posterLandscape").removeClass("noOpacity");
    playerLandscape.stopVideo();
    return false;
  }
}


/*until here*/
