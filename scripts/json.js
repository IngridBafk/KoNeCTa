function details(id) {
    alert(id)
}

fetch("https://ew6ohmfse7.execute-api.us-east-1.amazonaws.com/KoNeCTa/events")
    .then(res => res.json())
    .then(objJson => {

        objJson.forEach(event => {

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
        `
            let card = document.createElement('div');
            card.className = 'card mb-3';
            card.innerHTML = cardContentHTML;

            document.getElementById('events').appendChild(card);
        })
    })