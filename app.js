const characterURL = "https://dumbledoor-backend.herokuapp.com/characters/"
const body = document.body

fetch(characterURL)
    .then(parseJSON)
    .then(createAllCards)


function parseJSON(response) {
    return response.json()
}

function createAllCards(characters) {
    const container = document.createElement('div')
    container.className = "wizard-container"
    characters.forEach(character => {
        const card = document.createElement('div')
        card.className = 'wizard-card'
        card.innerHTML = `
            <div class='parent-img'>
                <img class='wizard-img' src='${character.image}'/>
                </div>
                <h3>${character.name}</h3>
                <p>${character.house}</p>
                `
        container.appendChild(card)
    })
body.appendChild(container)
}



{/* <img class='frame-img' src='images/pentagon_frame.png'/> */}

