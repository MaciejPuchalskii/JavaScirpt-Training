const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

const setTimeButton = document.querySelector('#setTime');

const timeDisplay = document.querySelector('#timeDisplay');

const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let timeLeft = 0;
let paused = true;
let intervalId;

let mins = 0;
let secs = 0;

setTimeButton.addEventListener('click', () => {

    mins = minutes.value;
    secs = seconds.value;
    if(mins == 0 && secs == 0)
    {
        alert("Please set time first!");
        ressetTime();
        return;
    }

    

    if(secs > 60)
    {
        mins = Number(mins) + Math.floor(secs / 60);
       
        secs = secs % 60;
    }
   
    
    timeLeft = (mins * 60) +Number(secs);

    console.log("it works"+ timeLeft);

    timeDisplay.textContent = `${mins}:${secs}`;
});
startButton.addEventListener('click', () => {
    if(mins == 0 && secs == 0)
    {
        alert("Please set time first!");
        ressetTime();
        return;
    }
    else if(paused)
    {
    paused = false;
    }
    else
    {
        alert("Timer is already running!");
        return;
    }

    intervalId = setInterval(updateTime,1000);

});
stopButton.addEventListener('click', ()=> {
    if(!paused)
    {
        paused = true;
        clearInterval(intervalId);
    }


});
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    ressetTime()
});
function ressetTime()
{
    paused = true;
    mins = 0;
    secs = 0;
    timeLeft = 0;
    minutes.value = 0;
    seconds.value = 0;
    timeDisplay.textContent = `${mins}0:${secs}0`;
}
function updateTime()
{
    if(timeLeft > 0)
    {
        timeLeft--;
        mins = Math.floor(timeLeft / 60);
        secs = timeLeft % 60;
        mins = pad(mins);
        secs = pad(secs);
        timeDisplay.textContent = `${mins}:${secs}`;
        console.log(timeLeft);
    }
    else
    {
        alert("Time is up!");
        ressetTime();
        clearInterval(intervalId);

    }
    function pad(unit){
        return(("0"+unit).length >2 ? unit : "0"+unit);
    }

   
}