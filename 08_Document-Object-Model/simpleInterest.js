async function getResult() {
  const p = document.getElementById("principal").value;
  const r = document.getElementById("rate").value;
  const t = document.getElementById("time").value;

  const res = await fetch(
    `https://sum-server.100xdevs.com/interest?principal=${p}&rate=${r}&time=${t}`
  );
  const ans = await res.json();
  document.getElementById("total").innerHTML =`The Total is: ${ans["total"]}` 
  document.getElementById("interest").innerHTML =`The Interest is: ${ans["interest"]}` 
}
