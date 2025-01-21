// gab all the li which will trigger and show the nav content.
const triggers = document.querySelectorAll('.cool > li');
// create the white background that will be dynamic and will move and resize depending on the top left coordinates and heigh and width properties.
const background = document.querySelector('.dropdownBackground');
// grab the nav to work with all coordinates to ensure the background is correct size and in correct location.
const nav = document.querySelector('.top');
// function to handel the mouseenter effect
function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');
  //getBoundingClientRect() gets the contents attribute/values
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    // grabs the size of content
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    // offsetting the top and left by the nav coords to ensure proper placement
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}
// function to handel the exit and removal of background and data.
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}
// adding event listeners for enter and exit of li's
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
