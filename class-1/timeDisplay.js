function timeDisplay() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const min = timeNow.getMinutes();
  const sec = timeNow.getSeconds();

  console.log(`The current time is ${hours}:${min}:${sec}`);
}

setInterval(timeDisplay, 1000);
