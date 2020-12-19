// All audios from the Undertale game and Deltarune game.
// lobby and game audios from the Undertale game and soundtrack.
// hit audio occurs when a monster has been attacked/hit by the player.

var lobby = new Audio('audio/Another Him.wav');
var game;
var content;
var hit = new Audio('audio/snd_damage_c.wav');
var images = ['img/sans.png', 'img/papyrus.png'];
var images2 = ['img/asriel.png', 'img/asriel2.png'];
$(document).ready(function() {
  // Enabling autoplay provides better demonstration of playing this music.
  // When loading the page.
  lobby.play();
  lobby.loop = true;
  $("div#gameType").modal({
    escapeClose: false,
    clickClose: false,
    showClose: false
  });
  $('#genocide').click(function() {
    $(this).data('clicked', true);
    lobby.pause();
    content = '<h1>Whack-A-Skeleton</h1>'+
              '<p>You have started a genocide run and you are almost finished. After clicking "start", you will have 30 seconds to attack ' +
              'as many Sans and Papyrus as you can. The Skeletons appear randomly so be ready to have a ' +
              '<span>bad time</span>!</p>';
    $('div#content').prepend(content);
    $('html, body').css('background-image', 'url(img/background.jpg)');
    $('div#gamespace').css('background-image', 'url(img/background2.jpg)');
    game = new Audio('audio/100 Megalovania.m4a');
    $('div#controls').prepend('<span id="showing">Game Music: Megalovania</span>');
    lobby = new Audio('audio/15 Sans..m4a');
    $('div#content').append('<img src="img/sansmoving.gif" id="sansmoving"/>');
    $('div#content').append('<img src="img/papyrusmoving.gif" id="papyrusmoving"/>');
    $('div#content').append('<img src="img/sanspapyrusdance.gif" id="sanspapyrusdance"/>');
    lobby.play();
    lobby.loop = true;
    $('button#music_button').click(function(){
      $('div#music').modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
      });
      $('button#megalovania').click(function() {
        $('span#showing').remove();
        game = new Audio('audio/100 Megalovania.m4a');
        $('div#controls').prepend('<span id="showing">Game Music: Megalovania</span>');
      });
      $('button#songSans').click(function() {
        $('span#showing').remove();
        game = new Audio('audio/72 Song That Might Play When You Fight Sans.m4a');
        $('div#controls').prepend('<span id="showing">Game Music: S.T.M.P.W.Y.F.Sans</span>');
      });
      $('button#megalovaniaCancer').click(function() {
        $(this).data('clicked', true);
        $('span#showing').remove();
        game = new Audio('audio/Megalovania Cancer.mp3');
        $('div#controls').prepend('<span id="showing">Game Music: Megalovania Cancer</span>');
      });
      $('button#bonetrousle').click(function() {
        $(this).data('clicked', true);
        $('span#showing').remove();
        game = new Audio('audio/24 Bonetrousle.m4a');
        $('div#controls').prepend('<span id="showing">Game Music: Bonetrousle</span>');
      });
      $('button#megalovaniaMusical').click(function() {
        $('span#showing').remove();
        game = new Audio('audio/Megalovania Musical.wav');
        $('div#controls').prepend('<span id="showing">Game Music: Megalovania Musical</span>');
      });
      $('button#musicalV2').click(function() {
        $(this).data('clicked', true);
        $('span#showing').remove();
        game = new Audio('audio/Musical V2.wav');
        $('div#controls').prepend('<span id="showing">Game Music: ???</span>');
      });
    });

    $('button#start_button').click(
      function() {
        gameStart();
      }
    );
  });
  $('#pacifist').click(function() {
    $(this).data('clicked', true);
    lobby.pause();
    $('html, body').css('background-image', 'url(img/background4.jpg)');
    $('div#gamespace').css('background-image', 'url(img/Monster_Encouragement.png)');
    $('div#gamespace').css('height', '480px')
    $('div#content').append('<img src="img/asrielbobbing.gif" id="asrielmoving"/>');
    content = '<h1>Whack-A-God of Hyperdeath</h1>'+
              '<p>You are close to the end of your true pacifist ending, ' +
              'but your friends are trapped and you must save them. After clicking "start", you will have 30 seconds to attack ' +
              'as many Asriel as you can. He appears randomly so be ready to ' +
              '<span id="save">SAVE the World</span>!</p>';
    $('div#content').prepend(content);
    game = new Audio('audio/87 Hopes and Dreams.m4a');
    $('div#controls').prepend('<span id="showing">Game Music: Hopes and Dreams</span>');
    lobby = new Audio("audio/86 Don't Give Up.m4a");
    lobby.play();
    lobby.loop = true;
    $('button#music_button').click(function(){
      $('div#music2').modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
      });
      $('button#hopesDreams').click(function() {
        $('span#showing').remove();
        game = new Audio('audio/87 Hopes and Dreams.m4a');
        $('div#controls').prepend('<span id="showing">Game Music: Hopes and Dreams</span>');
      });
      $('button#saveWorld').click(function() {
        $(this).data('clicked', true);
        $('span#showing').remove();
        game = new Audio('audio/89 SAVE the World.m4a');
        $('div#controls').prepend('<span id="showing">Game Music: SAVE the World</span>');
      });
    });

      $('button#start_button').click(
        function() {
          gameStart();
        }
      );
  });
});
var score = 0;
var time = 30;
var skeletonHit = 1;
// Made the minimum time to append larger due to too many images appending quickly
// if the random number is a very small number.
var inter = Math.floor(Math.random() * 2000) + 500;
var poof = Math.floor(Math.random() * 3000) + 1500;
var appear;

function gameStart() {
  score = 0;
  $('span#score').html(0 + " pts");
  if ($('#genocide').data('clicked')) {
    $('html, body').css('background-image', 'url(img/background3.jpg)');
    if ($('#megalovaniaCancer').data('clicked') || $('#musicalV2').data('clicked')) {
      $('div#gamespace').css('background-image', 'url(img/SANESS.gif)');
    } else if ($('#bonetrousle').data('clicked')) {
      $('div#gamespace').css('background-image', 'url(img/papyrusFight.gif)');
    } else {
      $('div#gamespace').css('background-image', 'url(img/sansfight.gif)');
    }
  } else if ($('#pacifist').data('clicked')) {
    $('html, body').css('background-image', 'url(img/AsrielFightBackground.png)');
    if ($('#saveWorld').data('clicked')) {
      $('div#gamespace').css('background-image', 'url(img/asrielFinal.gif)');
    } else {
      $('div#gamespace').css('background-image', 'url(img/asriel.gif)');
    }
  }
  $("button#music_button").attr("disabled", true);
  $("button#start_button").attr("disabled", true);
  time = 30;
  $('div#timer').show();
  $('div#gamespace').on('click', 'img', function() {
    hit.currentTime = 0;
    hit.play();
    $(this).remove();
    scoreTracker();
  });

  if ($("#genocide").data('clicked')) {
    appear = setInterval(addMole, inter);
  } else if ($('#pacifist').data('clicked')) {
    appear = setInterval(addMole2, inter);
  }

  timer();
  lobby.pause();
  game.play();
  game.loop = true;
}

function timer() {
  time--;
  $('div#timer').html(time + " seconds left");
    if (time > 0) {
      var timing = setTimeout("timer()", 1000);
    } else {
      clearInterval(appear);
      $('div#gamespace img').remove();
      clearTimeout(timing);
      alert("Times up! Your score is " + score);
      $('div#timer').hide();
      if ($("#genocide").data('clicked')) {
        $('html, body').css('background-image', 'url(img/background.jpg)');
        $('div#gamespace').css('background-image', 'url(img/background2.jpg)');
      } else if ($('#pacifist').data('clicked')) {
        $('html, body').css('background-image', 'url(img/background4.jpg)');
        $('div#gamespace').css('background-image', 'url(img/Monster_Encouragement.png)');
      }
      $("button#start_button").attr("disabled", false);
      game.pause();
      lobby.play();
      lobby.loop = true;
      location.reload();
    }
}

function addMole() {
  var img = $('<img src="' + images[Math.floor(Math.random() * images.length)] + '" style="left: ' + randomX() + 'px; top: ' + randomY() + 'px;">');
  $('div#gamespace').append(img);
  setTimeout(function() {
    img.remove();
  }, poof)
}

function addMole2() {
  if ($('#saveWorld').data('clicked')) {
    var img = $('<img src="img/asriel2.png" id="asriel2" style="left: ' + randomX() + 'px; top: ' + randomY2() + 'px;">');
    $('div#gamespace').append(img);
    setTimeout(function() {
      img.remove();
    }, poof);
  } else {
    var img = $('<img src="img/asriel.png" id="asriel" style="left: ' + randomX() + 'px; top: ' + randomY2() + 'px;">');
    $('div#gamespace').append(img);
    setTimeout(function() {
      img.remove();
    }, poof);
  }
}

function randomX() {
  var nx = Math.floor(Math.random() * 528);
  return nx;
}

function randomY() {
  var ny = Math.floor(Math.random() * 280);
  return ny;
}

function randomY2() {
  var ny = Math.floor(Math.random() * 420);
  return ny;
}

function scoreTracker() {
  score += 1;
  $('span#score').html(score + " pts");
}
