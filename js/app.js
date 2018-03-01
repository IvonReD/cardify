//Escribe tu código aqui----

const gallery = document.getElementById('gallery')
var images = document.querySelectorAll('img');

const insertElements = (figure, figCaption, infoAlt) => {
    gallery.appendChild(figure);
    figure.appendChild(infoAlt);
    figure.appendChild(figCaption);
    figCaption.innerText = infoAlt.alt;
}

const createElements = infoAlt => {
    let figure = document.createElement('figure');
    figure.className = 'img';
    let figCaption = document.createElement('figcaption');
    insertElements(figure, figCaption, infoAlt);
}

Array.from(images).forEach(image =>{
    let infoAlt = image.cloneNode();
    createElements(infoAlt);
    gallery.removeChild(image);
});