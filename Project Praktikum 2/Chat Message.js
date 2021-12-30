function send(sender) {
  let sender_chatbox = document.getElementById("chat-"+sender);
  let message = document.getElementById("message-"+sender);
  let text_send = document.createTextNode(message.value)

  let sender_chat = document.createElement("div");
  sender_chat.classList.add("chat-send");
  sender_chat.appendChild(text_send);

  sender_chatbox.appendChild(sender_chat);
  sender_chatbox.scrollTop = sender_chatbox.scrollHeight;

  message.value = "";
}

function checkKey(event, sender) {
  let key = event.keyCode
  if (key == 13) {
      send(sender)
  }
}