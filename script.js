// Append values to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = "i love you bum"
    } catch (error) {
        display.value = 'Error';
    }
}
