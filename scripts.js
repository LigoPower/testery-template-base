// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    const contentDiv = document.getElementById('content');

    // Function to load HTML into a container
    function loadHTML(url, container, callback) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
                if (callback) callback();
            })
            .catch(error => {
                console.error('Error loading HTML:', error);
            });
    }

    // Function to add event listeners to menu links
    function addMenuListeners() {
        const links = document.querySelectorAll('.menu a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                loadPage(page);
            });
        });
    }

    // Function to load page content
    function loadPage(page) {
        const pageUrl = `${config.pagesFolder}/${page}.html`;
        fetch(pageUrl)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    }

    // Load the menu and the homepage by default
    loadHTML('menu.html', menuContainer, addMenuListeners);
    loadPage('homepage');
});
