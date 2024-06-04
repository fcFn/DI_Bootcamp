const input = document.getElementById('lettersOnly');
input.addEventListener('keydown', (event) => {
    if (!/[a-zA-Z]/.test(event.key)) {
        event.preventDefault();
    }
});
