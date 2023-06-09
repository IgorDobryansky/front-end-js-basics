// use
const chat = createElement("div", "chat-box", "");

const inputWrapperFirstUser = createElement("form", "input-wrapper", "");
const messageInputFirstUser = createElement("input", "message", "", [
  { type: "text" },
  { placeholder: "Enter your message" }
]);
const sendMessageButtonFirstUser = createElement(
  "button",
  "send-message-button",
  "Send message",
  [{ type: "submit" }]
);
inputWrapperFirstUser.append(messageInputFirstUser, sendMessageButtonFirstUser);

const inputWrapperSecondtUser = createElement("form", "input-wrapper", "");

const messageInputSecondUser = createElement("input", "message", "", [
  { type: "text" },
  { placeholder: "Enter your message" }
]);
const sendMessageButtonSecondUser = createElement(
  "button",
  "send-message-button",
  "Send message",
  [{ type: "submit" }]
);

inputWrapperSecondtUser.append(
  sendMessageButtonSecondUser,
  messageInputSecondUser
);

root.append(chat, inputWrapperFirstUser, inputWrapperSecondtUser);

sendMessageButtonFirstUser.addEventListener("click", (event) => {
  event.preventDefault();

  const firstUserMessage = createElement("span", "first-user-message", "");
  firstUserMessage.textContent = messageInputFirstUser.value;
  if (!firstUserMessage.textContent) return;
  chat.append(firstUserMessage);
});

sendMessageButtonSecondUser.addEventListener("click", (event) => {
  event.preventDefault();

  const secondUserMessage = createElement("span", "second-user-message", "");
  secondUserMessage.textContent = messageInputSecondUser.value;
  if (!secondUserMessage.textContent) return;
  chat.append(secondUserMessage);
});

const str = "ertfadfas";

function ololo() {
  //   switch (str) {
  //     case "123":
  //       console.log("Hello, " + str);
  //       return;
  //     case "qwe":
  //       console.log("ololo, " + str);
  //       return;
  //     case "321":
  //       console.log("Goodbye, " + str);
  //       return;
  // default:
  //   console.log("Sorry, no cases match");
  //   break;
  //   }

  if (str === "123") {
    return "Hello, " + str;
  } else if (str === "qwe") {
    return "ololo, " + str;
  } else if (str === "321") {
    return "Goodbye, " + str;
  }
  return "Sorry, no cases match";
}

console.log(ololo());

const arr = ["",2,3,4,5];
let i = 0;

for (; arr[i]; ) {
  console.log(arr[i]);
  i++;
}
console.log(arr[5]);
