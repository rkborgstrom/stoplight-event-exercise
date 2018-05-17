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
 if (stopButtonOn===true) {
stopLight.style.backgroundColor = 'black';
stopButtonOn = false;
} else {
  stopLight.style.backgroundColor = 'red';
  stopButtonOn = true;
}
});

slowButton.addEventListener('click', function() {
 if (slowButtonOn===true) {
slowLight.style.backgroundColor = 'black';
slowButtonOn = false;
} else {
  slowLight.style.backgroundColor = 'yellow';
  slowButtonOn = true;
}
})

goButton.addEventListener('click', function() {
 if (stopButtonOn===true) {
goLight.style.backgroundColor = 'black';
goButtonOn = false;
} else {
  goLight.style.backgroundColor = 'green';
  goButtonOn = true;
}
})



















})();
