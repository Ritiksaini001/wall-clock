const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

function displayTimer(){
  let date = new Date()

  // getting hour, min, sec
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss

  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`
  sec.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayTimer, 1000)