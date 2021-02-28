let button = document.getElementById('submit');
button.addEventListener('click', handleSubmit);
let clearbutton = document.getElementById('clear');
clearbutton.addEventListener('click', clear);



function handleSubmit(evt) {
  evt.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let website = document.getElementById("website");
  let image = document.getElementById("image");
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let java = document.getElementById("java");
  let html = document.getElementById("html");
  let css = document.getElementById("css");

  if (name && email && website && image && (male || female) && (java.checked || html.checked || css.checked)) {
    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var gender = male.checked ? "Male" : "Female";
    var myHtmlContent = "<td colspan='4'><div class='fade-in'><p>"
      + name.value + "</p><p>"
      + gender + "</p><p>"
      + email.value + "</p><p>"
      + website.value + "</p><p>"
      + (java.checked ? "java " : "") + (html.checked ? "html " : "") + (css.checked ? "css" : "") + "</p><p>"
      + "</div></td><td colspan='2'><div class='fade-in'>" + "<img src=" + image.value + "/>" + "</div></td>";

    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = myHtmlContent;
    clear();
    document.querySelector(".warning").innerHTML = "";
  }
  else {
    document.querySelector(".warning").innerHTML = "please fill all the fields and fix the errors. ";
  }

}

function clear(e) {
  e.preventDefault();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("image").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("java").checked = false;
  document.getElementById("html").checked = false;
  document.getElementById("css").checked = false;

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test((email).toLowerCase());
}

function validateUrl(url) {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
}
