const websites = [
    { name: "Google", url: "https://www.krea.ai/", subtype: "image or video generation" },
    { name: "stable-diffusion", url: "https://huggingface.co/spaces/stabilityai/stable-diffusion", subtype: "image generation" },
    { name: "reame.so", url: "https://readme.so/editor", subtype: "readme generator" },
    
];

const websiteList = document.getElementById('website-list');

websites.forEach(website => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
        <a href="${website.url}" target="_blank">${website.name}</a>
        <span class="badge badge-secondary ml-2">${website.subtype}</span>
    `;
    websiteList.appendChild(listItem);
});
