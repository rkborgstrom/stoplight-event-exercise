(function() {
  'use strict';
  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');
  let stopButtonOn = false;
  let slowButtonOn = false;
  let goButtonOn = false;

  stopButton.addEventListener('click', function() {
    if (stopButtonOn) {
      stopLight.style.backgroundColor = 'black';
      stopButtonOn = false;
    } else {
      stopLight.style.backgroundColor = 'red';
      stopButtonOn = true;
    }
  });

  slowButton.addEventListener('click', function() {
    if (slowButtonOn) {
      slowLight.style.backgroundColor = 'black';
      slowButtonOn = false;
    } else {
      slowLight.style.backgroundColor = 'yellow';
      slowButtonOn = true;
    }
  });

  goButton.addEventListener('click', function() {
    if (goButtonOn) {

      goLight.style.backgroundColor = 'black';
      goButtonOn = false;
    } else {
      goLight.style.backgroundColor = 'green';
      goButtonOn = true;

    }
  });


stopButton.addEventListener('mouseenter', function(event){
console.log("Entered", event.target.textContent);
});

slowButton.addEventListener('mouseenter', function(event){
console.log("Entered", event.target.textContent);
});

goButton.addEventListener('mouseenter', function(event){
console.log("Entered", event.target.textContent);
});




stopButton.addEventListener('mouseleave', function(event){
console.log("Left", event.target.textContent);
});

slowButton.addEventListener('mouseleave', function(event){
console.log("Left", event.target.textContent);
});

goButton.addEventListener('mouseleave', function(event){
console.log("Left", event.target.textContent);
});


})();
