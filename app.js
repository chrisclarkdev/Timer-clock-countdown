let countdown;
const timerDisplay = document.querySelector('.display-time-left');
const endTime = document.querySelector('.display-end-time');
const timeNow = document.querySelector('.display-now');
buttons = document.querySelectorAll('[data-time]');
var audio = new Audio('horn.mp3');
// audio.play();

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);
  
  countdown = setInterval(() => {
    const  secondsLeft = Math.round((then - Date.now()) / 1000);
    // chexk if we should stop it 

    if(secondsLeft < 0){
      clearInterval(countdown);
      timerDisplay.classList.remove('red');
      audio.play();
      return;
    }
    //Display it 
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds){
  const minutes  = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  const display = `${minutes } : ${remainder < 10 ? '0' : ''}${remainder}`;
  if (seconds < 30 ){
    timerDisplay.classList.add('red')

  }
  timerDisplay.textContent = display;
 document.title = display
}
 
function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour} : ${minutes < 10 ? '0' : ''}${minutes}`
};

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}
buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit',  function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60)
  this.reset();
})

function displayTime() {
  time = new Date();

  timeHours = time.getHours();
  timeMinutes= time.getMinutes();
  timeSeconds = time.getSeconds();
  const t = timeNow.textContent = `${timeHours} : ${timeMinutes < 10 ? '0' : ''}${timeMinutes} : ${timeSeconds < 10 ? "0" : ""} ${timeSeconds}`
};

setInterval(() => {
 displayTime();
}, 1000);
  






