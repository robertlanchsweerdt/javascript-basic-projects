const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveAway = document.querySelector('.giveaway');
const displayItems = document.querySelectorAll('.deadline-format h4');

/**
 * 1 s = 1000 ms
 * 1 min = 60 s
 * 1 hr = 60 min
 * 1 day = 24 hours
 */

const oneSecondMillisecond = 1000;
const oneMinute = 60 * oneSecondMillisecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;

//const futureDate = new Date(2021, 4, 9, 8, 7, 0);
const futureDate = new Date('May 9, 2021 08:20:00');

const futureDateMilliseconds = futureDate.getTime();

const futureWeekDay = weekdays[futureDate.getDay()];
const futureMonth = months[futureDate.getMonth()];
const futureDay = futureDate.getDate();
const futureYear = futureDate.getFullYear();

const futureHour = futureDate.getHours();
const futureMinutes =
  (futureDate.getMinutes() < 10 ? '0' : '') + futureDate.getMinutes();

giveAway.innerText = `giveaway ends on ${futureWeekDay}, ${futureMonth} ${futureDay} ${futureYear}, ${futureHour}:${futureMinutes}am`;

function getRemainingTime() {
  const currentDateMilliseconds = new Date().getTime();
  const t = futureDateMilliseconds - currentDateMilliseconds;

  const numberFutureDays = Math.floor(t / oneDay);
  const numberFutureHours = Math.floor((t % oneDay) / oneHour);
  const numberFutureMinutes = Math.floor((t % oneHour) / oneMinute);
  const numberFutureSeconds = Math.floor(
    (t % oneMinute) / oneSecondMillisecond
  );

  const futureCalculations = [
    numberFutureDays,
    numberFutureHours,
    numberFutureMinutes,
    numberFutureSeconds,
  ];

  console.log(futureCalculations);

  displayItems.forEach((item, index) => {
    if (futureCalculations[index] <= 0) {
      futureCalculations[index] = 0;
    }
    item.innerText = futureCalculations[index];
  });

  if (t < 0) {
    clearInterval(callTimer);
    window.location.replace('https://www.google.com');
  }

  // if (t < 0) {
  //   clearInterval(callTimer);
  //   giveAway.innerText = `The giveaway has ended`;
  // }
}

const callTimer = setInterval(getRemainingTime, 100);
