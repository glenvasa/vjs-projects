const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 0, 17, 16, 24, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 59, 0);
const year = futureDate.getFullYear();
const hours =
  futureDate.getHours() < 13
    ? futureDate.getHours()
    : futureDate.getHours() - 12;
const minutes =
  futureDate.getMinutes() < 10
    ? `0${futureDate.getMinutes()}`
    : futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const dayOfWeek = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const timeOfDay = futureDate.getHours() < 12 ? "am" : "pm";

giveaway.textContent = `giveaway ends on ${dayOfWeek}, ${month} ${date}, ${year} ${hours}:${minutes}${timeOfDay}`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // divide t by (milliseconds in 1 day) to get # of days left
  const msDay = 1000 * 60 * 60 * 24;
  // gives us # of full days left
  const daysLeft = Math.floor(t / msDay);
  // gives us value in milliseconds of time left after removing full days left
  let remainingTime = t % msDay;
  const msHour = 1000 * 60 * 60;
  const hoursLeft = Math.floor(remainingTime / msHour);
  remainingTime = remainingTime % msHour;
  const msMinute = 1000 * 60;
  const minutesLeft = Math.floor(remainingTime / msMinute);
  remainingTime = remainingTime % msMinute;
  const secondsLeft = Math.floor(remainingTime / 1000);

  // set values array
  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  // adds a 0 in front of value if less than 10
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
    // values[index];
  });
  // when current time is greater than future time
  // no time remaining on countdown
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
//must invoke getRemainingTime() after countdown variable
// so we have access to the countdown variable above to stop
// interval
getRemainingTime();
