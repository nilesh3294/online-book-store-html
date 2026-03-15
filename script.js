// Customer Book Buy Logic
let totalAmount = 0;

function buyBook(button) {
    let bookDiv = button.parentElement;
    let price = parseInt(bookDiv.getAttribute('data-price'));
    totalAmount += price;
    document.getElementById('total').innerText = totalAmount;
    alert(`You bought "${bookDiv.querySelector('h3').innerText}" for ₹${price}`);
}

// Seller Logic
function loginSeller() {
    let sellerName = document.getElementById('sellerName').value.trim();
    if (sellerName === "") {
        alert("Enter a valid name!");
        return;
    }

    localStorage.setItem('sellerName', sellerName);
    document.getElementById('sellerDisplayName').innerText = sellerName;
    document.getElementById('sellerProfileName').innerText = sellerName;
    document.getElementById('profileSection').classList.remove('hidden');
    document.querySelector('.login-section').style.display = 'none';
}

function addBook() {
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;
    let price = document.getElementById('bookPrice').value;

    if(title === "" || author === "" || price === "") {
        alert("Fill all fields");
        return;
    }

    let li = document.createElement('li');
    li.textContent = `${title} by ${author} - ₹${price}`;
    document.getElementById('sellerBooksList').appendChild(li);

    // Clear fields
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPrice').value = "";
}
