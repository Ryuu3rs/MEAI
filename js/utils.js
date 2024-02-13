/**
 * @file utils.js
 * @version 1.1.0
 * Provides utility functions for message display, input handling, and more,
 * supporting the boot sequence and user interactions in the application.
 */

/**
 * Displays a message in a specified output element, simulating a typing effect.
 * @param {HTMLElement} output - The output element where messages are displayed.
 * @param {string} message - The message to be displayed.
 * @param {Function} [callback] - Optional callback to execute after the message is fully displayed.
 */
function displayMessage(output, message, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < message.length) {
            output.innerHTML += message.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            output.innerHTML += '\n'; // Move to the next line after the message is complete.
            if (callback) callback(); // Proceed to the next function if provided.
        }
        output.scrollTop = output.scrollHeight; // Keep scrolling to the bottom.
    }, 20); // Adjust typing speed if necessary.
}

/**
 * Enables or disables an input field.
 * @param {HTMLElement} input - The input element to be enabled or disabled.
 * @param {boolean} isEnabled - Determines whether the input should be enabled (true) or disabled (false).
 */
function toggleInput(input, isEnabled) {
    input.disabled = !isEnabled;
    if (isEnabled) input.focus(); // Automatically focus on the input if it's being enabled.
}

/**
 * Shows or hides HTML elements based on the specified condition.
 * @param {HTMLElement} element - The element to be shown or hidden.
 * @param {boolean} isVisible - Determines whether the element should be visible (true) or hidden (false).
 */
function toggleVisibility(element, isVisible) {
    element.style.visibility = isVisible ? 'visible' : 'hidden';
}

/**
 * Creates a debounced version of a function that delays its execution until after a specified wait time
 * has elapsed since the last time it was invoked.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} - The debounced function.
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export the utilities to be used in other parts of the application.
export { displayMessage, toggleInput, toggleVisibility, debounce };
