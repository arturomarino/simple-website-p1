PROJECT README
TechWeb Services Website

WHAT IS THIS PROJECT?

This is a website for TechWeb Services, a company that provides IT services and web development solutions. The website has 4 pages that show information about the company, their services, prices, and contact details.

PAGES DESCRIPTION

home.html - This is the main page of the website. It shows a welcome message and information about the company. It has an image and a list of services.

servicii.html - This page shows all the services that the company offers. It includes website development, web applications, IT consulting, and technical support. There is also a numbered list of other services.

preturi.html - This page shows the prices for different services. The price table is generated dynamically using JavaScript from an array. There is also a calculator where you can enter a price and quantity to calculate the total.

contact.html - This page has contact information including address, email, and phone number. It also shows business hours in a list format.

JAVASCRIPT FUNCTIONALITY

In preturi.html, JavaScript is used to generate a table of prices. The table is created from an array called "services" that contains service names and prices. The function "showTable()" loops through the array and creates HTML table rows.

There is also a calculation function called "doCalculation()". This function takes the price and quantity values from input boxes, multiplies them together, and displays the total result on the page. The function checks if both fields are filled and if the values are valid numbers before calculating.

The JavaScript code uses getElementById to get elements from the page and innerHTML to update the content. It is simple and straightforward code without advanced patterns.

TECHNICAL DETAILS

All HTML pages use semantic HTML5 elements like header, nav, main, section, article, and footer.

All styling is in the external style.css file.

The navigation menu is the same on all pages.

The footer includes the company address, an email link using mailto, and a phone link using tel.

Images are included using placeholder URLs.

