const input = document.querySelector("#phone");
const country = document.querySelector("#country");

const iti = window.intlTelInput(input, {
    onlyCountries: ["ie", "gb", "us", "ca", "au", "nz", "de"],
    preferredCountries: ["us"],
    nationalMode: true,
    customContainer: "w-full",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js" // just for formatting/placeholders etc
});

const handleChange = () => {
    if (input.value && !iti.isValidNumber()) {
        input.setCustomValidity("Please provide a valid phone number.");
        console.log("invalid")
    } else {
        input.setCustomValidity("");
        console.log("valid")
    }
};


// listen to "keyup", but also "change" to update when the user selects a country
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);

// listen to the telephone input for changes
input.addEventListener('countrychange', () => {
    country.value = iti.getSelectedCountryData().name;
});