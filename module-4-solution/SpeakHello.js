(function (window) {
  var speakWord = "Helloo";
  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);
