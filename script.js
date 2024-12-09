// script.js

// Funktion, um die Navbar zu laden
function loadNavbar() {
    fetch('navbar.html') // Navbar-Datei laden
        .then(response => {
            if (!response.ok) {
                throw new Error('Navbar konnte nicht geladen werden.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data; // Navbar in das HTML einfügen
        })
        .catch(error => {
            console.error('Fehler beim Laden der Navbar:', error);
        });
}

// Beim Laden der Seite die Navbar einfügen
window.addEventListener('DOMContentLoaded', loadNavbar);
