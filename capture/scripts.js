// going over event listeners and the concepts of propagation, bubbling, event capture, and new property 'Once'.
// when clicking the third element (most inner one) it will console log/select all nested element.
// Bubbling - the concept that when clicking on an element you are also clicking everything that is behind/wraped around it. also clicking the browser, and os screen, etc.

const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  // you can fix the bubbling problem by using stopPropagation
  e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    // capture is used to determine wether we are showing top/true or bottom/false which is the default to get the one you want.
    capture: false,
    // you can also unbind the capture by using once. eg. for a checkout button you only want clicked once.
    once: true,
  })
);

// how it works on JavaScript is that the events capture the events from top to bottom and it prints it out bottom to top
