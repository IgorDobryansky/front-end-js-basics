const parentsElements = document.querySelectorAll(".parent");

const draggedElements = document.querySelectorAll(".drag");

draggedElements.forEach((element) => {
  element.addEventListener("dragstart", () => {
    console.log("drag start");
    element.classList.add("dragging");
  });

  element.addEventListener("dragend", () => {
    console.log("drag end");
    element.classList.remove("dragging");
  });
});

parentsElements.forEach((element) => {
  element.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("drag over");
    const dragging = document.querySelector(".dragging");

    const underElement = getUnderElement(element, event.clientY);

    if (underElement === null) {
      element.append(dragging);
    } else {
      element.insertBefore(dragging, underElement.element);
    }
  });
});

function getUnderElement(parent, y) {
  const draggableElements = [
    ...parent.querySelectorAll(".drag:not(.dragging)")
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY
    }
  );
}
