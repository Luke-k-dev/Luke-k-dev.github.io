window.addEventListener('load', () => {
    fetch('./footer.html').then((res) => res.text()).then((txt) => {
        document.getElementById('footer-frame').innerHTML = txt;
    })
});

