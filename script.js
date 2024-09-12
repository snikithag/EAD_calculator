// script.js

// Function to append clicked button values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character on the display
function deleteChar() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('display');
    try {
        // Evaluate the expression on the display
        display.value = eval(display.value);
    } catch (error) {
        // Display an error message if the calculation is invalid
        display.value = 'Error';
    }
}
