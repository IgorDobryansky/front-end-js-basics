const arrowHour = document.querySelector(".arrow-hour");
const arrowMinute = document.querySelector(".arrow-minute");
const arrowSecond = document.querySelector(".arrow-second");

let date;

let clock = false;

function start() {
  const testDate = Date.now();
  console.log("start", testDate);
  date = new Date();

  const rotateSecondsDegree = date.getSeconds() * 6 - 90;
  //   console.log(rotateSecondsDegree);
  const rotateMinutesDegree = date.getMinutes() * 6 - 90;
  //   console.log(rotateMinutesDegree);
  let rotateHoursDeegree;
  const hourError = date.getMinutes() / 2;
  if (date.getHours() <= 12) {
    rotateHoursDeegree = date.getHours() * 30 - 90 + hourError;
    // console.log(rotateHoursDeegree);
  } else if (date.getHours() > 12) {
    rotateHoursDeegree = (date.getHours() - 12) * 30 - 90 + hourError;
    // console.log(rotateHoursDeegree);
  }

  arrowSecond.style.transform = `translate(-50%, -50%) rotate(${rotateSecondsDegree}deg)`;
  arrowMinute.style.transform = `translate(-50%, -50%) rotate(${rotateMinutesDegree}deg)`;
  arrowHour.style.transform = `translate(-50%, -50%) rotate(${rotateHoursDeegree}deg)`;

  console.log("end", Date.now());
  console.log("difference ", testDate - Date.now());
}

clock = setInterval(start, 1000);

document.body.addEventListener("click", () => {
  if (clock) {
    clearInterval(clock);
    clock = false;
  } else clock = setInterval(start, 1000);
});
