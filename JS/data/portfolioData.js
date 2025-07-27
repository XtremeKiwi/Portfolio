//UI %% Webdev //
const portfolioPiece1 = [{
        name: 'webdev1',
        img: 'img/Test-image.png',
        alt: 'Dysphoria design logo',
        href: 'https://mastodon.social/home'
    }]

// 3D //
const portfolioPiece2 = [{
    name: '3D!',
    img: 'img/Test-image.png',
    alt: 'Dysphoria design logo',
    href: '#'
}]

//Graphic Design//
const portfolioPiece3 = [{
    name: 'Graphic Design!',
    img: 'img/Test-image.png',
    alt: 'Dysphoria design logo',
    href: '#'
}]

//Concept art
const portfolioPiece4 = [{
    name: 'Concept art!',
    img: 'img/Test-image.png',
    alt: 'Dysphoria design logo',
    href: '#'
},
    {
        name: 'Concept art!',
        img: 'img/Test-image.png',
        alt: 'Dysphoria design logo',
        href: '#'
    }]

let pieceHTML1 = '';

portfolioPiece1.forEach((piece) => {
    pieceHTML1  += `
    <a href="${piece.href}">
        <div class="portfolio-piece">
            <img class="portfolio-image" src="${piece.img}" alt="${piece.alt}">
            <p>${piece.name}</p>
        </div>  
    </a>    
    `;
})

let pieceHTML2 = '';

portfolioPiece2.forEach((piece) => {
    pieceHTML2  += `
    <a href="${piece.href}">
        <div class="portfolio-piece">
            <img class="portfolio-image" src="${piece.img}" alt="${piece.alt}">
            <p>${piece.name}</p>
        </div>  
    </a> 
    `;
})

let pieceHTML3 = '';

portfolioPiece3.forEach((piece) => {
    pieceHTML3  += `
    <a href="${piece.href}">
        <div class="portfolio-piece">
            <img class="portfolio-image" src="${piece.img}" alt="${piece.alt}">
            <p>${piece.name}</p>
        </div>  
    </a> 
    `;
})


let pieceHTML4 = '';

portfolioPiece4.forEach((piece) => {
    pieceHTML4  += `
    <a href="${piece.href}">
        <div class="portfolio-piece">
            <img class="portfolio-image" src="${piece.img}" alt="${piece.alt}">
            <p>${piece.name}</p>
        </div>  
    </a> 
    `;
})

document.querySelector(".portfolio-grid1").innerHTML = pieceHTML1;
document.querySelector(".portfolio-grid2").innerHTML = pieceHTML2;
document.querySelector(".portfolio-grid3").innerHTML = pieceHTML3;
document.querySelector(".portfolio-grid4").innerHTML = pieceHTML4;