// const _ = require('lodash');

function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context=this;
        const args = arguments;
        clearTimeout(debounceTimer);
        setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const outputDiv = document.getElementById('output');
    const processChange = debounce((message) => {
        inputField.value = '';
        console.log(message);
    }, 10000);
    console.log({input: inputField?.value, out: outputDiv?.value});
    inputField.addEventListener('keydown', processChange('clear'));
    inputField.addEventListener('keydown', (event) => {
      // Check if the Enter key is pressed
      console.log(event);
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action (form submission)
        
        // Get the input value
        const inputValue = inputField.value;
  
        // Perform your action here
        outputDiv.textContent = `You entered: ${inputValue}`;
        
        // Clear the input field
        // inputField.value = '';
      }
  
      // Optionally, handle other keys/characters here
      // if (event.key === 'a') {
      //   console.log('The "a" key was pressed');
      // }
    });
  });
  