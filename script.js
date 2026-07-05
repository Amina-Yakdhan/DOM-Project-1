const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");

plusBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const quantity = btn.nextElementSibling;
        quantity.textContent = parseInt(quantity.textContent) + 1;
        updateTotal();
    });
});

minusBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const quantity = btn.previousElementSibling;

        if (parseInt(quantity.textContent) > 0) {
            quantity.textContent = parseInt(quantity.textContent) - 1;
            updateTotal();
        }
    });
});

const trashBtns = document.querySelectorAll(".fas.fa-trash-alt");
trashBtns.forEach(function(btn) {
    btn.addEventListener("click", 
        function() {
            const card = btn.closest(".card");
            const quantities = card.querySelectorAll(".quantity");
            quantities.forEach(function (quantity) {
                quantity.textContent = 0;
            });
        });
});

const heart = document.querySelectorAll(".fas.fa-heart");
heart.forEach(function(heart) {
    heart.addEventListener("click", function() {
        if (heart.style.color === "red") {
            heart.style.color = "black";
        } else {
            heart.style.color = "red";
        }
    });
});

function updateTotal() {
    let total = 0;

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        const price = parseInt(card.querySelector(".unit-price").textContent);
        const quantity = parseInt(card.querySelector(".quantity").textContent);

        total += price * quantity;
    });

    document.querySelector(".total").textContent = total + " $";
}