template-base project folder/
│
├── index.html
├── styles.css
├── scripts.js
├── config.js
├── menu.html
├── logo.png
└── pages/
    ├── homepage.html
    ├── aboutpage.html
    └── profilepage.html

Explanation
HTML Structure: The index.html file contains a simple navigation menu and a content container (<div id="content">). The index.html will dynamically load menu.html into the menu-container div and set up the event listeners for navigation.
CSS Styling: Basic styles are applied to make the menu look decent.
JavaScript:
The main script (scripts.js) dynamically loads the menu and page content based on this configuration. When the document is fully loaded, event listeners are added to each link in the menu. 
On clicking a menu link, the loadPage function is called with the page name.
The loadPage function fetches the corresponding HTML file and inserts its content into the contentDiv.
It is loading different "pages" in a single-page application.
