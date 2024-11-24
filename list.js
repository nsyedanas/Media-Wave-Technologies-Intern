const carListingForm = document.getElementById('carListingForm');

carListingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    alert('Your car has been listed successfully!');
    carListingForm.reset();
    
    // Redirect to browse page
    window.location.href = 'browse.html';
});