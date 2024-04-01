function createCard(title, content, buttonText, buttonLink) {
    // Create card element
    var card = document.createElement('div');
    card.className = 'col-md-4 mb-4';

    // Create card HTML content
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
                <a href="${buttonLink}" class="btn btn-primary">${buttonText}</a>
            </div>
        </div>
    `;

    return card;
}

// Example usage: create two cards
