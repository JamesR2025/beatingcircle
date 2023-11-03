window.addEventListener('load', () => {
    circle.style.animationPlayState = 'paused';
})

const circle = document.getElementById('circle')
let animationInterval;

function startAnimation () {
    circle.style.animationPlayState = 'running';
}
function stopAnimation () {
    circle.style.animationPlayState = 'paused';
}

