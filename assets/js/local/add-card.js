document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;

    const cardData = {
        firstName: firstName,
        lastName: lastName,
        cardNumber: cardNumber,
        expirationDate: expirationDate
    };

    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(cardData);
    localStorage.setItem('cards', JSON.stringify(cards));

    alert('Card saved successfully!');

    window.location.href = 'profile.html';
});

