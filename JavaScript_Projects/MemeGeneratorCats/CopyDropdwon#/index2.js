import {catsData} from '/data2.js';

const emotionSelect = document.getElementById('emotion-select')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const getImageBtn = document.getElementById('get-image-btn')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')


getImageBtn.addEventListener('click', renderCat);

memeModalCloseBtn.addEventListener('click',closeModal)


function closeModal(){
memeModal.style.display = 'none'}


function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
   <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    memeModal.style.display = 'flex'
}


function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()

    if(catsArray.length ===1){
        return catsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random()* catsArray.length)
        return catsArray[randomNumber]
    }
}



function getMatchingCatsArray() {
    const selectedEmotion = emotionSelect.value;
    const isGif = gifsOnlyOption.checked;
    const matchingCatsArray = catsData.filter(function(cat) {
        if (isGif) {
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
        } else {
            return cat.emotionTags.includes(selectedEmotion);
        }
    });
    return matchingCatsArray;
}



    

