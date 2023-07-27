// inspired by
// https://www.javascript-coder.com/form-validation/javascript-form-validation-phone-number/
// and
// https://stackoverflow.com/questions/30058927/format-a-phone-number-as-a-user-types-using-pure-javascript

// Get the reference of the HTML elements
var phone_input = document.getElementById("phone");
var country_select = document.getElementById("country");
var country_code_span = document.getElementById("country_code");

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if (isModifierKey(event)) {
        return;
    }

    var selected_country = country_select.options[country_select.selectedIndex].value;
    const target = event.target;
    const input = event.target.value.replace(/\D/g, '');

    if (selected_country === 'USA') {
        // Enforcing US phone number format
        // Need to double back slash due to JavaScript quirk
        // https://stackoverflow.com/questions/39592208/dynamically-adding-pattern-and-title-attributes-to-input-control
        phone_input.setAttribute("pattern", "\\(\\d{3}\\) \\d{3}-\\d{4}");

        const inputFormatted = input.substring(0, 10);
        const zip = inputFormatted.substring(0, 3);
        const middle = inputFormatted.substring(3, 6);
        const last = inputFormatted.substring(6, 10);

        if (inputFormatted.length > 6) {
            target.value = `(${zip}) ${middle}-${last}`;
        } else if (inputFormatted.length > 3) {
            target.value = `(${zip}) ${middle}`;
        } else if (inputFormatted.length > 0) {
            target.value = `(${zip}`;
        }
    } else if (selected_country === 'DEU') {
        phone_input.removeAttribute("pattern"); // No number enforcement

        target.value = input; // No specific formatting for German numbers
    }
};

phone_input.addEventListener('input', () => {
    phone_input.setCustomValidity('');
    phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
    phone_input.setCustomValidity('Please provide a valid phone number');
});

phone_input.addEventListener('keydown', enforceFormat);
phone_input.addEventListener('keyup', formatToPhone);

country_select.addEventListener('change', function () {
    var selected_country = country_select.options[country_select.selectedIndex].value;

    // change the country code based on the selected country
    switch (selected_country) {
        case 'USA':
            country_code_span.textContent = '+1';
            break;
        case 'DEU':
            country_code_span.textContent = '+49';
            break;
        // you can add more cases if you have more countries
    }

    // simulate keydown and keyup events
    var keydownEvent = new KeyboardEvent('keydown');
    var keyupEvent = new KeyboardEvent('keyup');

    phone_input.dispatchEvent(keydownEvent);
    phone_input.dispatchEvent(keyupEvent);
});

