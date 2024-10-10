const apiUrl = 'https://rickandmortyapi.com/api/character';
let characters = [];

// Função para buscar personagens da API
async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        characters = data.results;
        displayCharacters(characters);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Função para exibir personagens no HTML
function displayCharacters(characterList) {
    const characterContainer = document.getElementById('character-container');
    characterContainer.innerHTML = '';

    characterList.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
        `;

        characterContainer.appendChild(characterCard);
    });
}

// Função para filtrar personagens pelo nome
function filterCharacters() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(searchInput)
    );
    displayCharacters(filteredCharacters);
}

// Carregar personagens ao iniciar a aplicação
fetchCharacters();

