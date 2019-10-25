const usersURL = "https://dumbledoor-backend.herokuapp.com/users/1"
// const usersURL = "http://localhost:4000/users/3"

const wizardsURL = "https://dumbledoor-backend.herokuapp.com/characters/"
const faveURL = "https://dumbledoor-backend.herokuapp.com/favorites/"
// const faveURL = "http://localhost:4000/favorites"
const USER_ID = 1
const body = document.body
const container = document.createElement('div')
container.className = 'collect-card-container'

fetch(usersURL)
    .then(parseJSON)
    .then(getRandCards)


function parseJSON(response) {
    return response.json() 
}

function getRandCards(user) {
    user.data.attributes.characters.forEach(character => {
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "Avada Kedavra"
        deleteButton.className = "avada"
        deleteButton.addEventListener('click', () => removeCard(event, character.id))
       const collectionCard = document.createElement('div')
       collectionCard.className = 'collection-card'
       collectionCard.innerHTML = `
       <img class='collect-img' src='${character.image}'/>
       <h1>${character.name}</h1>
       <p>${character.house}</p>
       `
       collectionCard.appendChild(deleteButton)
       container.appendChild(collectionCard)
       body.appendChild(container)
    })

}

function removeCard(event, id) {
    event.target.parentNode.remove()

    fetch(faveURL, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: USER_ID,
            character_id: id
        })
    })
}

