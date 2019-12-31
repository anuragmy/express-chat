let socket = io();
$(() => {
  console.log("loaded");
  getMessages();
  $("#send").click(() => {
    let message = {
      name: $("#name").val(),
      message: $("#message").val()
    };
    console.log(message);
    postMessages(message);
    //getMessages();
    //addMessage({ name: "anrag", message: "hi there" });
  });
  // addMessage({ name: "anrag", message: "hi there" });
});

socket.on("message", addMessage);

function addMessage(message) {
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message}`);
}
function getMessages() {
  $.get("http://localhost:8000/messages", data => {
    console.log(data);
    data.forEach(addMessage);
  });
}
function postMessages(message) {
  $.post("http://localhost:8000/messages", message);
}
