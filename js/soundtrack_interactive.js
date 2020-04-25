// these are the things we'll control with clicking and tapping
    let videoPlayer = document.getElementById("videoPlayer");
    let audioPlayer = document.getElementById("audioPlayer");

    audioPlayer.pause();
    videoPlayer.pause();
    // videos are inside the video folder; music is inside the music folder
    let video = ["shining2.mp4", "oz2.mp4", "graduate2.mp4", "vendetta2.mp4", "lionking2.mp4"];
    let music = ["bluedanube.mp3", "valkyries.mp3", "nocturne.mp3", "toccata.mp3", "shining.mp3", "oz.mp3", "graduate.mp3", "vendetta.mp3", "lionking2.mp3"]

    // viewer can click on different movies to change what they will see. these are references to the thing they'll click.
    // var movie1 = document.getElementById("movie1");
    // var movie2 = document.getElementById("movie2");
    // var movie3 = document.getElementById("movie3");

    // var audio1 = document.getElementById("audio1");

    function changeVideo(number) {
      // change source to desired video
      videoPlayer.setAttribute("src", "video/" + video[number]);
      //change outline for active video

      if ((number) == (0)) {
        document.getElementById("movieoutline1").style.border = "thick solid #a9261c";}
       else {
        document.getElementById("movieoutline1").style.border = "thick solid white";
      }

      if ((number) == (1)) {
        document.getElementById("movieoutline3").style.border = "thick solid #a9261c";}
       else {
        document.getElementById("movieoutline3").style.border = "thick solid white";
      }

      if ((number) == (2)) {
        document.getElementById("movieoutline2").style.border = "thick solid #a9261c";}
       else {
        document.getElementById("movieoutline2").style.border = "thick solid white";
      }

      if ((number) == (3)) {
        document.getElementById("movieoutline4").style.border = "thick solid #a9261c";}
       else {
        document.getElementById("movieoutline4").style.border = "thick solid white";
      }

      if ((number) == (4)) {
        document.getElementById("movieoutline5").style.border = "thick solid #a9261c";}
       else {
        document.getElementById("movieoutline5").style.border = "thick solid white";
      }
  }



    function changeMusic(number) {
      // change source to desired path
      audioPlayer.setAttribute("src", "music/" + music[number]);
      videoPlayer.currentTime = 0;
    }

    function setMedia(videoNumber, musicNumber) {
      changeMusic(musicNumber);
      changeVideo(videoNumber);

    }

    function changeImage() {
      // if you wanted to make this work for any button you'd probably turn the id you use into a variable.
      let button = document.getElementById("bigPlayButton");
      let IsButtonOn = button.dataset.index;
      // console.log(button, IsButtonOn);
      if (IsButtonOn == "0") {
        // button is off. turn it on and switch to pause.
        button.setAttribute("data-index", "1");
        button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/pause.png";
        // you can add changeMusic here for when you click on a button that's not the one actively playing. If you do that, you also need to know which position in the array-- that's gonna be another variable
        audioPlayer.play();
        videoPlayer.play();
      } else {
        // button is on. turn it off and switch to play.
        button.setAttribute("data-index", "0");
        button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/play.png";
        audioPlayer.pause();
        videoPlayer.pause();
      }
    }

    function resetPlay() {
      let buttons = document.getElementsByClassName("musicButtonPlay");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("src", "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/play.png");
      }
    }


    function controlMusic(buttonID, musicNumber) {
      // if you wanted to make this work for any button you'd probably turn the id you use into a variable.
      let button = document.getElementById(buttonID);
      let IsButtonOn = button.dataset.index;
      console.log(buttonID, IsButtonOn, music[musicNumber]);

      if (IsButtonOn == "0") {
        // button is off. turn it on and switch to pause. turn off all other buttons.
        resetPlay();
        button.setAttribute("data-index", "1");
        button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/pause.png";
        changeMusic(musicNumber)
        // you can add changeMusic here for when you click on a button that's not the one actively playing. If you do that, you also need to know which position in the array-- that's gonna be another variable
        audioPlayer.play();
        videoPlayer.play();


      } else {
        // button is on. turn it off and switch to play.
        button.setAttribute("data-index", "0");
        button.src = "https://raw.githubusercontent.com/Mackmiller/Capstone/master/img/play.png";
        audioPlayer.pause();
        videoPlayer.pause();


      }
    }
