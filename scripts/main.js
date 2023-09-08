var MyImage = document.querySelector("img");

MyImage.onclick = function () {
    var MySrc = MyImage.getAttribute("src");
    if (MySrc === "images/1.webp") {
	MyImage.setAttribute("src", "images/firefox2.webp");
    } else {
	MyImage.setAttribute("src", "images/1.webp");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Pizza is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Pizza is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
