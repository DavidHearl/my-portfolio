document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const spheresContainer = container.querySelector('.spheres');
    const sphereWidth = 5; // Width of each sphere element in pixels
    const containerWidth = container.clientWidth;
  
    const numberOfSpheres = Math.floor(containerWidth / sphereWidth);
  
    for (let i = 0; i < numberOfSpheres; i++) {
      const sphereElement = document.createElement('span');
      const randomValue = Math.floor(Math.random() * 45) + 5;
      const randomDuration = Math.random() * 5 + 5; // Adjust the range here for faster animation
      const randomDelay = Math.random() * 5; // Adjust the range here for delay
      sphereElement.setAttribute(
        'style',
        `--i:${randomValue}; --duration:${randomDuration}s; --delay:${randomDelay}s`
      );
      spheresContainer.appendChild(sphereElement);
    }
  });
  