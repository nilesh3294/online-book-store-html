// Seller Login Logic
function loginSeller() {
    let sellerName = document.getElementById('sellerName').value.trim();
    if (sellerName === "") {
        alert("Enter a valid name!");
        return;
    }

    // Display seller profile
    localStorage.setItem('sellerName', sellerName);
    document.getElementById('sellerDisplayName').innerText = sellerName;
    document.getElementById('sellerProfileName').innerText = sellerName;
    document.getElementById('profileSection').classList.remove('hidden');
    document.querySelector('.login-section').style.display = 'none';
}

// Add Book Logic
function addBook() {
    let title = document.getElementById('bookTitle').value.trim();
    let author = document.getElementById('bookAuthor').value.trim();
    let price = document.getElementById('bookPrice').value.trim();

    if(title === "" || author === "" || price === "") {
        alert("Fill all fields");
        return;
    }

    let li = document.createElement('li');
    li.textContent = `${title} by ${author} - ₹${price}`;
    document.getElementById('sellerBooksList').appendChild(li);

    // Clear input fields
    document.getElementById('bookTitle').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPrice').value = "";
}
