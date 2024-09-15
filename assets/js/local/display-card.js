document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const cards = JSON.parse(localStorage.getItem('cards')) || [];

    cards.forEach((card,index) => {
        const newCard = document.createElement('div');
        newCard.classList.add('col');

        newCard.innerHTML = `
            <article class="payment-card" style="--bg-color: #6c757d">
                <div class="payment-card__top">
                    <img src="./assets/img/card/default.svg" alt="" />
                    <span class="payment-card__type">FeatherCard</span>
                </div>
                <div class="payment-card__number">${card.cardNumber}</div>
                <div class="payment-card__bottom">
                    <div>
                        <p class="payment-card__label">Card Holder</p>
                        <p class="payment-card__value">${card.firstName} ${card.lastName}</p>
                    </div>
                    <div class="payment-card__expired">
                        <p class="payment-card__label">Expired</p>
                        <p class="payment-card__value">${card.expirationDate}</p>
                    </div>
                    <div class="payment-card__circle"></div>
                </div>
                <button class="payment-card__delete" data-index="${index}">X</button>
                
            </article>
            
        `;

        cardContainer.appendChild(newCard);
    });
    document.querySelectorAll('.payment-card__delete').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteCard(index);
        });
    });
});

function deleteCard(index) {
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.splice(index, 1); 
    localStorage.setItem('cards', JSON.stringify(cards));
    location.reload(); 
}
