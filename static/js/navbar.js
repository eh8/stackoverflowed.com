document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar-default');
    var button = document.getElementById('menu-toggle');
    var icon = document.getElementById('menu-icon');

    // Attach click handler to the button
    button.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
        icon.classList.toggle('iconoir-menu');
        icon.classList.toggle('iconoir-cancel');
    });

    // Attach click handler to the links
    var links = navbar.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            navbar.classList.add('hidden');
            icon.classList.toggle('iconoir-menu');
            icon.classList.toggle('iconoir-cancel');
        });
    }
});