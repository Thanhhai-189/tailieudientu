var showbot = document.getElementById("chatbot");

// Get the button that opens the modal
var btn = document.getElementById("keychat");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("pop-up-toggle")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  showbot.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  showbot.style.display = "none";
}

//When the user clicks out of modal, close the modal
document.addEventListener('click', function(event) {
  if (!showbot.contains(event.target) && !btn.contains(event.target)) {
    showbot.style.display = "none";
  }
})

var showconn = document.getElementById("connect");

// Get the button that opens the modal
var btn1 = document.getElementById("conn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("pop-up-toggle1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  showconn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  showconn.style.display = "none";
}

document.addEventListener('click', function(event) {
  if (!showconn.contains(event.target) && !btn1.contains(event.target)) {
    showconn.style.display = "none";
  }
})
