function details(id) {
    alert(id)
}

document.addEventListener('DOMContentLoaded', function () {
    const eventFilterInput = document.getElementById('eventFilter');
    const cardEventsContainer = document.getElementById('cardsEvents');

    // Hacemos el fetch.
    fetch("https://ew6ohmfse7.execute-api.us-east-1.amazonaws.com/KoNeCTa/events")
        .then(res => res.json())
        .then(objJson => {
            // Por cada evento ejecutamos la función que está debajo para cargar cada evento a la card.
            objJson.forEach(event => {
                renderEventCard(event);
            });

            // Agregamos un listener para el input del filtro.
            eventFilterInput.addEventListener('input', function () {
                const filterValue = eventFilterInput.value.toLowerCase();
                // Se vacía el contenido de cards para que lo que se haya buscado en el filtro no se acumule.
                cardEventsContainer.innerHTML = '';
                // Se compara el eventType escrito en el filtro con el de los eventos y se cargan los eventos que coincidan.
                objJson.forEach(event => {
                    if (event.eventType.toLowerCase().includes(filterValue)) {
                        // Render the card for the matching event
                        renderEventCard(event);
                    }
                });
            });
        });

    // Esta función es para que carge el evento en la card.
    function renderEventCard(event) {
        let cardContentHTML = `
                <div class="row">        
                    <div class="col-md-4">
                        <img src="${event.img}" class="img-fluid rounded-start custom-img" alt="photo event">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">${event.eventName} - ${event.eventType}</h3>
                            <p class="card-text">${event.description}</p>
                            <a href=${event.locationHtml} target="_blank">${event.location}</a>
                            <p class="card-text"><small class="text-body-secondary">Date: ${event.startingDate} - ${event.finishingDate} Hour: ${event.startingTime} - ${event.finishingTime}</small></p>
                            <a href='#' class="btn btn-primary" onclick="details(${event.eventID})">Details</a>
                        </div>
                    </div>
                </div>
                `;

        let card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = cardContentHTML;

        cardEventsContainer.appendChild(card);
    }
})
