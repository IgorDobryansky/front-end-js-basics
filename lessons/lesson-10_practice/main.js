import { createElement } from "./createElement";
import "./style.css";

const app = document.querySelector("#app");

const box = createElement("div", "box");

app.append(box);

const tabsParent = createElement("div", "tabs-parent");
const tabsContentParent = createElement("div", "tabs-content-parent");
box.append(tabsParent, tabsContentParent);

const tabsArray = [
  {
    tagName: "div",
    className: "tab",
    title: "HTML"
  },
  {
    tagName: "div",
    className: "tab",
    title: "CSS"
  },
  {
    tagName: "div",
    className: "tab",
    title: "JS"
  },
  {
    tagName: "div",
    className: "tab",
    title: "React"
  }
];

const tabsContentArray = [
  {
    tagName: "div",
    className: "tab-content",
    dataId: "html",
    description:
      "1 qwerqwerqwer qwerqwerqwer qwerqwerqwerqwerqwerqwerqewrqwer qerqwerqwer qwerqwerqw"
  },
  {
    tagName: "div",
    className: "tab-content",
    dataId: "js",
    description:
      "3 qwerqwerqwer qwerqwerqwer qwerqwerqwerqwerqwerqwerqewrqwer qerqwerqwer qwerqwerqw"
  },
  {
    tagName: "div",
    className: "tab-content",
    dataId: "css",
    description:
      "2 qwerqwerqwer qwerqwerqwer qwerqwerqwerqwerqwerqwerqewrqwer qerqwerqwer qwerqwerqw"
  },
  {
    tagName: "div",
    className: "tab-content",
    dataId: "React",
    description:
      "4 qwerqwerqwer qwerqwerqwer qwerqwerqwerqwerqwerqwerqewrqwer qerqwerqwer qwerqwerqw"
  }
];

tabsArray.map((tab) => {
  const tabElement = createElement(tab.tagName, tab.className);
  tabElement.textContent = tab.title;
  tabsParent.append(tabElement);
});

tabsContentArray.map((tabContent) => {
  const tabContentElement = createElement(
    tabContent.tagName,
    tabContent.className
  );
  tabContentElement.textContent = tabContent.description;
  tabContentElement.dataset.id = tabContent.dataId;
  tabsContentParent.append(tabContentElement);
});

const tabs = Array.from(document.querySelectorAll(".tab"));

const contentArray = Array.from(document.querySelectorAll(".tab-content"));

function setAllTabsInactive() {
  tabs.map((tab) => {
    tab.classList.remove("active");
  });
}

function showTabContent(dataId) {
  contentArray.map((content) => {
    if (content.dataset.id.toLowerCase() === dataId.toLowerCase()) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

tabs.map((tab) => {
  tab.addEventListener("click", () => {
    setAllTabsInactive();
    tab.classList.add("active");
    const dataId = tab.textContent.toLowerCase();
    showTabContent(dataId);
  });
});

tabs[0].classList.add("active");
const dataId = tabs[0].textContent.toLowerCase();
showTabContent(dataId);
