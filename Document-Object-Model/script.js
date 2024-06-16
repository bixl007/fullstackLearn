const getFirstName = () => {
  let y = document.getElementById("loginForm").elements[0].value;
  document.getElementById("firstNameDisplay").innerHTML =
    `${y}` + " is your first name";

  const para = document.createElement("p");
  para.innerText = "This is a paragraph created by DOM.";
  document.body.appendChild(para);
};
