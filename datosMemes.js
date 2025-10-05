const obtenerMemes = async () => {
const memesContainers = document.getElementById('list-memes')
const memeTemplate = document.getElementById('meme')

/*fetch: */
/*async: */
/*await: Permite hacer más cosas mientras espero a la API*/
const request = await fetch('https://api.imgflip.com/get_memes')

const respuesta = await request.json()

/*console.log(respuesta.data.memes[0].url)*/

respuesta.data.memes.slice(0,4).forEach(meme => {
    const newMemeCard = memeTemplate.cloneNode(true);
    const img = newMemeCard.querySelector('img');
    img.src = meme.url;
    memesContainers.appendChild(newMemeCard);
});
memeTemplate.remove();
}

const obtenerGifs = async () =>{
    const gifsContainers = document.getElementById('gifs')

    /*fetch: */
    /*async: */
    /*await: Permite hacer más cosas mientras espero a la API*/
    const request = await fetch('https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=maxverstappen&limit=4')

    const respuesta = await request.json()

    gifsContainers.innerHTML = '';

respuesta.data.forEach(gif => {
    const gifUrl = gif.images.original.url;

    const gifCard = document.createElement('div');
    gifCard.classList.add('col-12', 'col-sm-6', 'col-md-3', 'mb-3', 'd-flex', 'justify-content-center');
    gifCard.innerHTML = `
        <div class="border rounded-3 shadow-sm" style="width: 300px; height: 300px;">
            <img src="${gifUrl}" class="w-100 h-100 object-fit-cover rounded" alt="Gif">
        </div>
    `;
    gifsContainers.appendChild(gifCard);
})
}

obtenerMemes();
obtenerGifs();