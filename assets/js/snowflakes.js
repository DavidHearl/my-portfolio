document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.sphere-container');
  const spheresContainer = container.querySelector('.spheres');
  const sphereWidth = 5; // Width of each sphere element in pixels
  const containerWidth = container.clientWidth;

  const numberOfSpheres = Math.floor(containerWidth / sphereWidth);

  for (let i = 0; i < numberOfSpheres; i++) {
    const sphereElement = document.createElement('span');
    const randomValue = Math.floor(Math.random() * 45) + 9;
    const randomDuration = Math.random() * 5 + 4; // Adjust the range here for faster animation
    const randomDelay = Math.random() * 5; // Adjust the range here for delay
    const randomSway = Math.random() * 20 - 2; // Adjust the range here for sway

    console.log(`Sphere ${i + 1} - Random Value: ${randomValue}`); // Unitless
    console.log(`Sphere ${i + 1} - Random Duration: ${randomDuration}`); // Value in s
    console.log(`Sphere ${i + 1} - Random Delay: ${randomDelay}`); // Value in s
    console.log(`Sphere ${i + 1} - Random Sway: ${randomSway}`); // Value in px

    sphereElement.setAttribute(
      'style',
      `--i:${randomValue}; --duration:${randomDuration}s; --delay:${randomDelay}s; --sway:${randomSway}px`
    );
    spheresContainer.appendChild(sphereElement);
  }
});
