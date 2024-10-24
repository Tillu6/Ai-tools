const websites = [
    { name: "Google", url: "https://www.google.com" },
    { name: "GitHub", url: "https://www.github.com" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" }
];

const websiteList = document.getElementById('website-list');

websites.forEach(website => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `<a href="${website.url}" target="_blank">${website.name}</a>`;
    websiteList.appendChild(listItem);
});
