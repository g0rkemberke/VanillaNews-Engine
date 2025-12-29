# VanillaNews-Engine

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/g0rkemberke/VanillaNews-Engine)

VanillaNews-Engine (DOM Manipulation Project)
About the Project
This project was developed to create the fundamental building blocks of a modern news portal dynamically using Vanilla JavaScript. Instead of writing static HTML, data (in the form of JSON-like objects) is processed through JavaScript and transformed into visual components on the DOM (Document Object Model).

Technical Implementation
The following core software concepts were applied during the development process:

Dynamic Component Architecture: Factory functions were designed to generate repetitive news cards and menu items.

DOM Manipulation: The HTML structure was constructed on the JavaScript side using createElement, appendChild, and querySelector methods.

Event Handling: To enable the accordion-style news expansion and the side menu trigger, click event listeners and the classList.toggle method were utilized.

Iterative Data Processing: Raw data arrays were iterated using forEach loops to transform each data object into a UI component.

File Structure and Responsibilities
1. News Component (haberler.js)
This component receives news data and populates a specific HTML template.

Each news card includes a title, date, content paragraphs, and an expansion button.

Clicking the button toggles CSS classes to expand or collapse the content area.

2. Menu Component (menu.js)
This component manages the navigation section of the portal.

It transforms a category list into a structured list (ul/li).

It integrates with the menu button located in the header to control the visibility of the navigation menu.

Setup and Usage
Clone the project to your local machine.

Open the index.html file in your browser.

Check the browser console to ensure JavaScript files are loaded correctly.
