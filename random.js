const URL = "https://dumbledoor-backend.herokuapp.com/characters/"
// const URL = "http://localhost:4000/characters/"
const faveURL = "https://dumbledoor-backend.herokuapp.com/favorites"
// const faveURL = "http://localhost:4000/favorites"

const randButton = document.querySelector('button')
const body = document.body
const USER_ID = 1
const randomContainer = document.querySelector('.random-container')
console.log(randomContainer)


fetch(URL)
    .then(parseJSON)
    .then(getRandom)
    
function parseJSON(response){
    return response.json()
}

function getRandom(wizards){
    randButton.addEventListener("click", event => {
       event.preventDefault()
       const wizard = wizards[Math.floor(Math.random() * wizards.length) - 1]
       createCard(wizard)
    })
}


function createCard(wizard){
    const favBtn = document.createElement('button')
    favBtn.className = 'favorite-button'
    const randomCard = document.createElement('div')
    
    favBtn.innerText = "ADD TO COLLECTION"
    randomCard.className = 'random-card'
    randomCard.innerHTML = `<img class='random-wizard' src='${wizard.image}'/> `
    
    favBtn.addEventListener("click", () => addToFavorites(wizard))
    randomCard.appendChild(favBtn)
    randomContainer.appendChild(randomCard)
}
body.append(randomContainer)



function addToFavorites(wizard){
        fetch(faveURL, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "character_id": wizard.id, 
                "user_id": USER_ID
            })
        }).then(res => window.location.href = "collection.html")
}



    
    // <button type='button' id='favorite-btn'>ADD TO COLLECTION</button>