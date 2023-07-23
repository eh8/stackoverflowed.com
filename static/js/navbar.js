document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar-default');
    var button = document.getElementById('menu-toggle');

    // Attach click handler to the button
    button.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });

    // Attach click handler to the links
    var links = navbar.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            navbar.classList.add('hidden');
        });
    }
});