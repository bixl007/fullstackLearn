let startTime = Date.now();

setTimeout(function () {
  let endTime = Date.now();

  let elapsedTime = endTime - startTime;

  console.log(`Elapsed time: ${elapsedTime} ms`);
}, 1000);
