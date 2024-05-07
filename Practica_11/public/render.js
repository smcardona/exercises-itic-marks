// setting
const PORT = 80; // change if you are using diferent
const HOST = 'localhost';
const BASE_URI = `http://${HOST}:${PORT}`;

// document important objects
const info = document.getElementById('game-info');
const renderPlane = document.getElementById('render');

// render fields
const rTitle = document.getElementById('title');
const rMessage = document.getElementById('message');
const rImage = document.getElementById('scene');
const rChoices = document.getElementById('choices');


function render(data) {
    // render or hide title
    if (data.title) {
        rTitle.innerHTML = data.title;
        rTitle.removeAttribute('hidden');
    }
    else rTitle.hidden = true

    rMessage.innerHTML = data.message;

    if (data.image) {
        rImage.setAttribute('src', data.image);
        rImage.removeAttribute('hidden');
    }
    else rImage.hidden = true;

    rChoices.innerHTML = '';
    // Loop through choices and create buttons
    data.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.label;
        button.onclick = function () { processChoice(choice.api); };
        rChoices.appendChild(button);
    });
}


function start() {
    // Fetch starting data
    fetch(BASE_URI + '/start')
        .then(res => res.json())
        .then(fase => {
            render(fase);

            info.hidden = true;
            renderPlane.removeAttribute('hidden');
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to process choice
function processChoice(apiData) {
    const { method, uri } = apiData;
    const query = {
        method,
        headers: { 'Content-Type': 'application/json' },
    }
    if (method != 'GET') {
        query.body = apiData.body ? JSON.stringify(body) : {};
    }

    fetch(BASE_URI + uri, query)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to process choice');
            }

            // Optionally, you can handle success response here
            console.log('Choice processed successfully ' + uri);
            return response.json()
        })
        .then(data => {
            if (data.redirect)
                render(redirect)
            else
                render(data)
        })
        .catch(error => console.error('Error processing choice:', error));
}