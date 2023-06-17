// declare
const root = document.getElementById("root");

const createElement = (tagName, className, textContent, attributes = []) => {
  const element = document.createElement(tagName);
  element.className = className ? className : "";
  element.textContent = textContent ? textContent : "";
  !!attributes.length &&
    attributes.map((attribute) => {
      for (key in attribute) {
        element[key] = attribute[key];
      }
    });

  return element;
};
