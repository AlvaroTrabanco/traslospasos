var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  playerFamilyIntro = new YT.Player('videoFamilyIntro', {
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'KkY4dZqw0eo',
    events: {
      'onReady': onPlayerReadyFamilyIntro,
      'onStateChange': onPlayerStateChangeFamilyIntro
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
}

//posters//

var posterRoad = $("#posterRoad");
var CuencaNalonBeginning = $("#CuencaNalonBeginning");

function onPlayerReadyFamilyIntro(event) {
  var obj = $("#CuencaNalonBeginning");
  var pos = obj.offset();
  var bottom = obj.offset() + obj.outerHeight(true);
  var muteButton = document.getElementById("muteButton");

  $('.speaker').click(function(e) {
    e.preventDefault();

    if (!$(this).hasClass("muted")){
      $(this).addClass("muted");
      // console.log("ev muted");
      $('body video, body audio').each(function(){
        $(this).prop('muted', true);
      });
      playerFamilyIntro.mute();
      // playerC.mute();
      // playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerFamilyIntro.unMute();
      // playerC.unMute();
      // playerHagel.unMute();
    }
  });


  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return viewportTop <= elementTop  && viewportBottom > elementBottom;
  };

  $.fn.isNotInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom < viewportTop || elementTop > viewportBottom;
  };

  var lastScrollTop = 0;

  $(document).on('load resize scroll', function() {

    var scrollTop = $(window).scrollTop();
    var st = $(this).scrollTop();


    if ($("#CuencaNalonBeginning").isInViewport() && !$("#muteButton").hasClass("muted")) {

      playerFamilyIntro.playVideo();
      playerFamilyIntro.unMute();
      $("#posterCuencaNalon").addClass("noOpacity");
    }else if ($("#CuencaNalonBeginning").isInViewport() && $("#muteButton").hasClass("muted")) {
      //scrollTop < pos.top - obj.outerHeight(true)
      playerFamilyIntro.playVideo();
      playerFamilyIntro.mute();
      $("#posterCuencaNalon").addClass("noOpacity");
    }else {
      playerFamilyIntro.stopVideo();
      $("#posterCuencaNalon").removeClass("noOpacity");
    }

    lastScrollTop = st;
});
}

function onPlayerStateChangeFamilyIntro(event) {
  if (event.data == 0) {
    playerFamilyIntro.stopVideo();
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

  $(document).on('load resize scroll', function() {
    var obj = $("#videoFamily");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();


    if (scrollTop < pos.top - obj.outerHeight(true)/2) {
      //scrollTop < pos.top - obj.outerHeight(true)
      playerFamily.stopVideo();
      $("#posterFamily").fadeIn('10000', function(){
        $("#posterFamily").fadeIn();
      });
    }else if (scrollTop < pos.top + obj.outerHeight(true) && !$("#muteButton").hasClass("muted")) {
      console.log("I should be playing");
      playerFamily.playVideo();
      playerFamily.unMute();
      $("#posterFamily").fadeOut('10000', function(){
        $("#posterFamily").fadeOut();
      });

    } else if (scrollTop < pos.top + obj.outerHeight(true) && $("#muteButton").hasClass("muted")){
      console.log("I should be playing");
      playerFamily.playVideo();
      playerFamily.mute();
      $("#posterFamily").fadeOut('10000', function(){
        $("#posterFamily").fadeOut();
      });

    } else{
      console.log("I should stop");
      playerFamily.stopVideo();
      $("#posterFamily").fadeIn('3', function(){
        $("#posterFamily").fadeIn();
      });
    }
});
}


function onPlayerStateChangeFamily(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoFamily").offset().top}, 500);
    playerFamily.stopVideo();

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

  $(document).on('load resize scroll', function() {
    var obj = $("#videoRoad");
    var pos = obj.offset();
    var bottom = obj.offset() + obj.outerHeight(true);
    var muteButton = document.getElementById("muteButton");

    var scrollTop = $(window).scrollTop();


    if (scrollTop < pos.top - obj.outerHeight(true)/2) {
      //scrollTop < pos.top - obj.outerHeight(true)
      playerRoad.stopVideo();
      $("#posterRoad").fadeIn('10000', function(){
        $("#posterRoad").fadeIn();
      });
    }else if (scrollTop < pos.top + obj.outerHeight(true) && !$("#muteButton").hasClass("muted")) {
      console.log("I should be playing");
      playerRoad.playVideo();
      playerRoad.unMute();
      $("#posterRoad").fadeOut('10000', function(){
        $("#posterRoad").fadeOut();
      });

    } else if (scrollTop < pos.top + obj.outerHeight(true) && $("#muteButton").hasClass("muted")){
      console.log("I should be playing");
      playerRoad.playVideo();
      playerRoad.mute();
      $("#posterRoad").fadeOut('10000', function(){
        $("#posterRoad").fadeOut();
      });

    } else{
      console.log("I should stop");
      playerRoad.stopVideo();
      $("#posterRoad").fadeIn('3', function(){
        $("#posterRoad").fadeIn();
      });
    }
});
}


function onPlayerStateChangeRoad(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoRoad").offset().top}, 500);
    playerRoad.stopVideo();
    return false;
  }
}
