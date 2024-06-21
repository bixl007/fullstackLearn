let timeout;
function debounce() {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    populateDiv();
  }, 300);
}

async function populateDiv() {
  const a = document.getElementById("first").value;
  const b = document.getElementById("second").value;

  const res = await fetch(`https://sum-server.100xdevs.com/sum?a=${a}&b=${b}`);
  const ans = await res.text();
  document.getElementById(
    "finalSum"
  ).innerHTML = `The sum of the elements is ${ans}`;
}
