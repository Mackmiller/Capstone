let audioPlayer1 = document.getElementById("audioPlayer1");

audioPlayer1.pause();

// videos are inside the video folder; music is inside the music folder
let music2 = ["bluedanube.mp3", "wagner.mp3", "mendelssohn.mp3", "williamtell.mp3", "hallelujah.mp3", "pompandcircumstance.mp3", "valkyries.mp3", "nocturne.mp3", "rigoletto.mp3", "toccata.mp3"]

// viewer can click on different movies to change what they will see. these are references to the thing they'll click.
// var movie1 = document.getElementById("movie1");
// var movie2 = document.getElementById("movie2");
// var movie3 = document.getElementById("movie3");

// var audio1 = document.getElementById("audio1");



function changeMusic1(number) {
  // change source to desired path
  audioPlayer1.setAttribute("src", "music/" + music2[number]);

}

function setMusic(musicNumber) {
  changeMusic1(musicNumber);
}

function changeImage1() {
  // if you wanted to make this work for any button you'd probably turn the id you use into a variable.
  let button = document.getElementById("bigPlayButton");
  let IsButtonOn = button.dataset.index;
  // console.log(button, IsButtonOn);
  if (IsButtonOn == "0") {
    // button is off. turn it on and switch to pause.
    button.setAttribute("data-index", "1");
    button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/pause.png";
    // you can add changeMusic1 here for when you click on a button that's not the one actively playing. If you do that, you also need to know which position in the array-- that's gonna be another variable
    audioPlayer1.play();
  } else {
    // button is on. turn it off and switch to play.
    button.setAttribute("data-index", "0");
    button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/play.png";
    audioPlayer1.pause();
  }
}

function resetMusic() {
  let buttons = document.getElementsByClassName("musicButtonPlay1");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("src", "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/play.png");
  }
}

function controlMusic1(buttonID, musicNumber) {
  // if you wanted to make this work for any button you'd probably turn the id you use into a variable.
  let button = document.getElementById(buttonID);
  let IsButtonOn = button.dataset.index;
  console.log(buttonID, IsButtonOn, music2[musicNumber]);

  if (IsButtonOn == "0") {
    // button is off. turn it on and switch to pause. turn off all other buttons.
    resetMusic();
    button.setAttribute("data-index", "1");
    button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/pause.png";
    changeMusic1(musicNumber)
    // you can add changeMusic1 here for when you click on a button that's not the one actively playing. If you do that, you also need to know which position in the array-- that's gonna be another variable
    audioPlayer1.play();
  } else {
    // button is on. turn it off and switch to play.
    button.setAttribute("data-index", "0");
    button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/play.png";
    audioPlayer1.pause();
  }
}
