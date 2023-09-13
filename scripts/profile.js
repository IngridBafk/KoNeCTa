document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('card-container');

    fetch('json/events.json')
        .then(response => response.json())
        .then(eventsJson => {
            eventsJson.forEach(event => {
                const card = createCard(event);
                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching events.json:', error));

    function createCard(event) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = `
            <img src="${event.img}" class="card-img-top" alt="photo event">
            <div class="card-body">
                <h5 class="card-title">${event.eventName}</h5>
                <p class="card-text">${event.description}</p>
                <p>Date: ${event.startingDate} - ${event.finishingDate}<br>Time: ${event.startingTime} - ${event.finishingTime}</p>
                <a href="${event.locationHtml}" target="_blank" class="card-link">${event.location}</a>
                <button class="btn btn-primary" onclick="details(${event.eventID})">Details</button>
            </div>
        `;

        card.innerHTML = cardContent;

        return card;
    }
});
