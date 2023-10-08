const hrsArr = [1,2,3,4,5,6,7,8,9,10,11,12];

function updateDigitalClock(){
  let currentDay = new Date()
  let currentHr = currentDay.getHours()
  let currentMin = currentDay.getMinutes()
  let currentSec = currentDay.getSeconds()
  console.log(currentHr)
  
  
  let currentSecStr = `${currentSec}`
  if(currentSec < 10){
    currentSecStr = `0${currentSec}`  
  }
  
  let currentMinStr = `${currentMin}`
  if(currentMin < 10){
    currentMinStr = `0${currentMin}`
  }

  document.getElementById("digital-clock").textContent = `${currentHr}:${currentMinStr}:${currentSecStr}`
}

function render12Hrs(){
  for(let i = 0; i < hrsArr.length; i++){
    let hr = document.createElement("p")
    hr.className = `hr hr${hrsArr[i]}`
    hr.textContent = hrsArr[i]
    hr.id = hrsArr[i]

    document.querySelector(".clock-board").append(hr)
  }
}

function updateSecPointer(){
  let currentSec = new Date().getSeconds()
  // 360(deg) / 60(sec) = 6, 6(6deg = 1 sec)
  let rotationDeg = currentSec * 6;

  let secLine = document.querySelector("#sec-line")
  secLine.style.transform = `translateX(-50%) rotate(${rotationDeg}deg)`;
}

function updateMinPointer(){
  let currentMin = new Date().getMinutes()
  // 360(deg) / 60(min) = 6, 6(6deg = 1 min)
  let rotationDeg = currentMin * 6
  console.log("min", currentMin, rotationDeg)
  let minLine = document.querySelector("#min-line")
  minLine.style.transform = `translateX(-50%) rotate(${rotationDeg}deg)`;
}

function updateHrPointer(){
  let currentHr = new Date().getHours()
  // 360(deg) / 12(hrs) = 30, 30(30deg = 1hr)
  let rotationDeg = currentHr * 30
  let hrLine = document.querySelector("#hr-line")
  hrLine.style.transform = `translateX(-50%) rotate(${rotationDeg}deg)`;
}

render12Hrs()
updateDigitalClock()
updateSecPointer()
updateMinPointer()
updateHrPointer()
//updates every 1 sec
setInterval(updateSecPointer, 1000)
//updates every 1min
setInterval(updateMinPointer, 1000)
//updates hrPointer
setInterval(updateHrPointer, 1000)
//updates digital clock
setInterval(updateDigitalClock, 1000)
