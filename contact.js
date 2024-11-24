// Get car ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

// DOM Elements
const carImage = document.getElementById('carImage');
const carTitle = document.getElementById('carTitle');
const carPrice = document.getElementById('carPrice');
const contactForm = document.getElementById('contactForm');

// Format price to USD
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);
}

// Load car details
function loadCarDetails() {
    const car = cars.find(c => c.id === carId);
    
    if (car) {
        carImage.src = car.image;
        carImage.alt = `${car.year} ${car.make} ${car.model}`;
        carTitle.textContent = `${car.year} ${car.make} ${car.model}`;
        carPrice.textContent = formatPrice(car.price);
    } else {
        window.location.href = 'browse.html';
    }
}

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert('Message sent! The seller will contact you soon.');
    contactForm.reset();
});

// Load car details when page loads
loadCarDetails();