const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = !!className ? className : "";
  return element;
};

const BOMB = "&#128163;";
const FLAG = "&#127988";

const root = document.getElementById("root");
