var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  playerB = new YT.Player('videoB', {
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'L1Q_y99aUmY',
    events: {
      'onReady': onPlayerReadyB,
      'onStateChange': onPlayerStateChangeB
    }
  });


  playerC = new YT.Player('videoC', {
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'e4yMYZFnDms',
    events: {
      'onReady': onPlayerReadyC,
      'onStateChange': onPlayerStateChangeC
    }
  });

  playerHagel = new YT.Player('videoHagel', {
    height: 'auto',
    width: '100%',
    playerVars: {
      'controls': 0,
      'enablejsapi': 1,
      'rel': 0
    },
    videoId: 'Ih7xhea9Lao',
    events: {
      'onReady': onPlayerReadyHagel,
      'onStateChange': onPlayerStateChangeHagel
    }
  });
}



function onPlayerReadyB(event) {
  var obj = $("#videoB");
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
      playerB.mute();
      playerC.mute();
      playerHagel.mute();

    } else {
      $(this).removeClass("muted");
      // console.log("ev UNmuted");
      $('body video, body audio').each(function(){
         $(this).prop('muted', false);
      });
      playerB.unMute();
      playerC.unMute();
      playerHagel.unMute();
    }
  });

  $(document).on('scroll', function() {

    var scrollTop = $(window).scrollTop();


    if (scrollTop < pos.top) {
      //scrollTop < pos.top - obj.outerHeight(true)
      playerB.stopVideo();
    }else if (scrollTop < pos.top + obj.outerHeight(true) + obj.outerHeight(true)/4 && !$("#muteButton").hasClass("muted")) {
      // console.log("UNmuteee");
      playerB.playVideo();
      playerB.unMute();

    } else if (scrollTop < pos.top + obj.outerHeight(true) + obj.outerHeight(true)/4 && $("#muteButton").hasClass("muted")){
      // console.log("muteee");
      playerB.playVideo();
      playerB.mute();

    } else{
      playerB.stopVideo();
    }
});
}

function onPlayerStateChangeB(event) {
        if (event.data == 0) {
          $('html,body').animate({ scrollTop:$("#afterVideoB").offset().top}, 500);
          playerB.stopVideo();
          return false;
        }
}



function onPlayerReadyC(event) {
  var obj = $("#videoC");
  var pos = obj.offset();
  var bottom = obj.offset() + obj.outerHeight(true);
  var muteButton = document.getElementById("muteButton");


  $(document).on('scroll', function() {

    var scrollTop = $(window).scrollTop();


    if (scrollTop < pos.top) {
      //scrollTop < pos.top - obj.outerHeight(true)
      playerC.stopVideo();
    }else if (scrollTop < pos.top + obj.outerHeight(true) + obj.outerHeight(true)/4 && !$("#muteButton").hasClass("muted")) {
      // console.log("UNmuteee");
      playerC.playVideo();
      playerC.unMute();

    } else if (scrollTop < pos.top + obj.outerHeight(true) + obj.outerHeight(true)/4 && $("#muteButton").hasClass("muted")){
      // console.log("muteee");
      playerC.playVideo();
      playerC.mute();

    } else{
      playerC.stopVideo();
    }
  });
}

function onPlayerStateChangeC(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoC").offset().top}, 500);


    return false;
  }
}




function onPlayerReadyHagel(event) {
  var obj = $("#videoHagel");
  var pos = obj.offset();
  var bottom = obj.offset() + obj.outerHeight(true);
  var muteButton = document.getElementById("muteButton");


  $(document).on('scroll', function() {

    var scrollTop = $(window).scrollTop();


    if (scrollTop < pos.top) {
      //scrollTop < pos.top - obj.outerHeight(true)
      playerHagel.stopVideo();
    }else if (scrollTop < pos.top + obj.outerHeight(true) + obj.outerHeight(true)/4 && !$("#muteButton").hasClass("muted")) {
      // console.log("UNmuteee");
      playerHagel.playVideo();
      playerHagel.unMute();

    } else if (scrollTop < pos.top + obj.outerHeight(true) + obj.outerHeight(true)/4 && $("#muteButton").hasClass("muted")){
      // console.log("muteee");
      playerHagel.playVideo();
      playerHagel.mute();

    } else{
      playerHagel.stopVideo();
    }
  });
}

function onPlayerStateChangeHagel(event) {
  if (event.data == 0) {
    $('html,body').animate({ scrollTop:$("#afterVideoHagel").offset().top}, 500);
    playerHagel.stopVideo();
    return false;
  }
}
