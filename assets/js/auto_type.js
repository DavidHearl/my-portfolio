// Array of values to type into elements
const valuesToType = [
    'const',
    'person',
    '=',
    '{',
    'firstName:',
    '"David"',
    ',',
    'lastName:',
    '"Hearl"',
    ',',
    'age:',
    '25',
    ',',
    'hobbies:',
    '["Rugby", "Computers"]',
    ',',
    'currentOccupation:',
    '"Designer"',
    ',',
    'email:',
    '"david.hearl@outlook.com"',
    ',',
    'phone:',
    '07930828560',
    ',',
    '}',
    ';'
  ];
  
  // Delay between typing each character (in milliseconds)
  const typingSpeed = 100; // Adjust as needed
  
  // Function to type values into elements with class names
  function typeValuesIntoElements() {
    let index = 0;
  
    function typeValue() {
      if (index < valuesToType.length) {
        const className = `line-${index + 1}`;
        const elements = document.querySelectorAll(`.${className}`);
  
        if (elements.length > 0) {
          typeTextIntoElement(elements, valuesToType[index], 0, () => {
            index++;
            setTimeout(typeValue, typingSpeed); // Type the next value
          });
        } else {
          // If no elements with the current className exist, move to the next value
          index++;
          setTimeout(typeValue, typingSpeed);
        }
      } else {
        // All values have been typed, reset after 10 seconds
        setTimeout(resetValues, 10000);
      }
    }
  
    // Function to type text into elements
    function typeTextIntoElement(elements, text, charIndex, callback) {
      if (charIndex < text.length) {
        elements.forEach((element) => {
          if (!element.classList.contains('mini-text-gray')) {
            // Check if the element does not have the class 'mini-text-gray'
            element.textContent += text.charAt(charIndex);
          }
        });
        setTimeout(() => typeTextIntoElement(elements, text, charIndex + 1, callback), typingSpeed);
      } else {
        // Call the callback function when typing is complete
        callback();
      }
    }
  
    // Reset function to clear all values except 'mini-text-gray'
    function resetValues() {
      document.querySelectorAll('.mini-code-block p:not(.mini-text-gray)').forEach((element) => {
        element.textContent = '';
      });
      index = 0; // Reset the index
      setTimeout(typeValue, 1000); // Start typing after 1 second
    }
  
    // Start typing when the page loads
    typeValue();
  }
  
  // Call the typeValuesIntoElements function to start typing values
  window.onload = typeValuesIntoElements;
  