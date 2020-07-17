// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.querySelector('h1');
mainHeading.textContent = 'Modify the DOM';
const header = document.getElementByTagName("header")
header.innerHTML = '<h2>Modify the DOM</h2>';

