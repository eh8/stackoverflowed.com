let init = Math.floor(Math.random() * (29 - 24 + 1)) + 24;
let backlogElement = document.getElementById('backlog');
backlogElement.innerText = init;

let num = init;

function updateNumber() {
    const delta = Math.random() > 0.50 ? 2 : -2;
    num += delta;
    if (num <= 10) {
        num += 2;
    }

    backlogElement.classList.add('opacity-0');

    setTimeout(() => {
        backlogElement.innerText = num;
        backlogElement.classList.remove('opacity-0');
    }, 750);
}

setInterval(updateNumber, 30000);
