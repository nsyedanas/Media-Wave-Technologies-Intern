// DOM Elements
const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const carList = document.getElementById('carList');

// Format price to USD
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);
}

// Format number with commas
function formatNumber(num) {
    return num.toLocaleString();
}

// Create car card HTML
function createCarCard(car) {
    return `
        <div class="car-card">
            <img src="${car.image}" alt="${car.year} ${car.make} ${car.model}" class="car-image">
            <div class="car-details">
                <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
                <p class="car-price">${formatPrice(car.price)}</p>
                <div class="car-info">
                    <span>📅 ${car.year}</span>
                    <span>🛣️ ${formatNumber(car.mileage)} km</span>
                    <span>⚙️ ${car.transmission}</span>
                    <span>⛽ ${car.fuelType}</span>
                    <span>📍 ${car.location}</span>
                </div>
                <a href="contact.html"><button class="btn-primary" style="width: 100%">Contact Seller</button></a>
            </div>
        </div>
    `;
}

// Filter cars based on search and price
function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const priceRange = priceFilter.value;

    return cars.filter(car => {
        // Search filter
        const matchesSearch = 
            car.make.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm) ||
            car.year.toString().includes(searchTerm);

        if (!matchesSearch) return false;

        // Price filter
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            if (max) {
                return car.price >= min && car.price <= max;
            } else {
                return car.price >= min;
            }
        }

        return true;
    });
}

// Render filtered cars
function renderCars() {
    const filteredCars = filterCars();
    
    if (filteredCars.length === 0) {
        carList.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <p>No cars found matching your criteria.</p>
            </div>
        `;
        return;
    }

    carList.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
}

// Event listeners
searchInput.addEventListener('input', renderCars);
priceFilter.addEventListener('change', renderCars);

// Initial render
renderCars();

//Sign In form..............................................
const signInBtn = document.getElementById('signInBtn');
const signInModal = document.getElementById('signInModal');

signInBtn.addEventListener('click', () => {
    signInModal.style.display = 'block'; // Show the modal
});


window.addEventListener('click', (event) => {
    if (event.target === signInModal) {
        signInModal.style.display = 'none'; // Hide the modal
    }
});

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert('You have Signed In');
    signInModal.style.display = 'none';
});




