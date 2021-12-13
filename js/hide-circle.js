let circlePulseElm = null;

window.addEventListener('load', () => {
    circlePulseElm = window.document.getElementsByClassName("pulsating-circle")[0]
    window.addEventListener('scroll', () => {
        let alpha = 1;
        if (window.scrollY > 100) {
            alpha = 0;
        } else {
            alpha = 1 - window.scrollY/100;
        }
        circlePulseElm.style.opacity = `${alpha}`;
    });
});

