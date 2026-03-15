let totalAmount = 0;

function buyBook(button) {
    let bookDiv = button.parentElement;
    let price = parseInt(bookDiv.getAttribute('data-price'));
    totalAmount += price;
    document.getElementById('total').innerText = totalAmount;
    alert(`You bought "${bookDiv.querySelector('h3').innerText}" for ₹${price}`);
}
