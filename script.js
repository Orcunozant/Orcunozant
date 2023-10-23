const dino = document.querySelector('.dino');

function jump() {
    let position = 0;
    const jumpInterval = setInterval(() => {
        if (position === 150) {
            clearInterval(jumpInterval);

            const fallInterval = setInterval(() => {
                if (position === 0) {
                    clearInterval(fallInterval);
                } else {
                    position -= 30;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 30;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});