function loadNavbar() {
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Navbar konnte nicht geladen werden.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('Fehler beim Laden der Navbar:', error);
        });
}

window.addEventListener('DOMContentLoaded', loadNavbar);
