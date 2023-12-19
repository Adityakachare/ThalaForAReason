function validateInput() {
  var userInput = document.getElementById("th").value;

  var textOverlay = document.getElementById("textOverlay");
  var videoElement;

  if (!isNaN(userInput)) {
    var numberInput = parseFloat(userInput);
    var digits = numberInput.toString().split("");
    var sum = digits.reduce(function (acc, digit) {
      return acc + parseInt(digit);
    }, 0);

    if (sum === 7) {
      textOverlay.innerHTML = "Total is: " + sum + "<br>THALA FOR A REASON💛";
      videoElement = document.getElementById("myVideo");
    } else {
      textOverlay.innerHTML = "Total is not 7 <br> Thala is DISAPPOINTED💔";
      videoElement = document.getElementById("myVideo1");
    }
  } else {
    var trimmedLength = userInput.trim().length;
    if (trimmedLength === 7) {
      textOverlay.innerHTML =
        "Length is: " + trimmedLength + " <br>THALA FOR A REASON💛";
      videoElement = document.getElementById("myVideo");
    } else {
      textOverlay.innerHTML = "Length is not 7 <br> Thala is DISAPPOINTED💔";
      videoElement = document.getElementById("myVideo1");
    }
  }

  changeBackgroundAndPlayVideo(videoElement);
}

function changeBackgroundAndPlayVideo(video) {
  document.body.style.backgroundImage = "none";
  var textOverlay = document.getElementById("textOverlay");
  textOverlay.style.display = "block";
  textOverlay.style.whiteSpace = "pre-line";

  video.style.display = "block";
  video.play();

  video.addEventListener("ended", function () {
    window.location.reload();
  });
}
