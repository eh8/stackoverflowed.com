const input = document.querySelector("#phone");
const country = document.querySelector("#country");

const iti = window.intlTelInput(input, {
    onlyCountries: ["ie", "gb", "us", "ca", "au", "nz", "de"],
    preferredCountries: ["us"],
    nationalMode: true,
    customContainer: "w-full",
    hiddenInput: "Phone", // you need this to ensure phone number dispatched to volunteer is internationalized
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
});

const handleChange = () => {
    if (input.value && !iti.isValidNumber()) {
        input.value = iti.getNumber(intlTelInputUtils.numberFormat.NATIONAL);
        input.setCustomValidity("Please provide a valid phone number.");
    } else if (input.value && iti.isValidNumber()) {
        input.value = iti.getNumber(intlTelInputUtils.numberFormat.NATIONAL);
        input.setCustomValidity("");
    } else {
        input.setCustomValidity("");
    }
};

// listen to "keyup", but also "change" to update when the user selects a country
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);

// listen to the telephone input for changes
input.addEventListener('countrychange', handleChange);
input.addEventListener('countrychange', () => {
    country.value = iti.getSelectedCountryData().name;
});