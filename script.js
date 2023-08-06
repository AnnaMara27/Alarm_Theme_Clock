const toggleModeBtn = document.getElementById("modeToggle");
const selectMenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
const content = document.querySelector(".content");
const setAlarmBtn = document.getElementById("setAlarmBtn");


let alarmTime;
let isAlarmSet = false;
const ringtone = new Audio("files/ringtone.wav");

//Light or Dark Mode Switching
toggleModeBtn.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggleModeBtn.innerText = "Dark mode";
  } else {
    html.classList.add("dark");
    toggleModeBtn.innerText = "Light mode";
  }
});

// TIME DISPLAY




//GET ALARM TIMING VALUES
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let time = new Date(),
    year = time.getFullYear(),
    month = time.getMonth(),
    date = time.getDate(),
    day = time.getDay();
    h = time.getHours(),
    m = time.getMinutes(),
    s = time.getSeconds(),
    ampm = "AM";

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  console.log(`${h}:${m}:${s} ${ampm}`);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(day)
  const dayDisplay = document.querySelector(".date");
  dayDisplay.innerText = day;

  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop() = true;
  }
}, 1000);

//SET ALARM

function setAlarm() {
  if(isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    return isAlarmSet = false;
  }


  let chosenTime = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (
    chosenTime.includes("Hour") ||
    chosenTime.includes("Minute") ||
    chosenTime.includes("AM/PM")
  ) {
    return alert("Please, select a valid time to set alarm!");
  }
  isAlarmSet = true;
  alarmTime = chosenTime;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);
