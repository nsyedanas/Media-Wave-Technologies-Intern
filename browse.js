// DOM Elements
const makeFilter = document.getElementById('makeFilter');
const yearFilter = document.getElementById('yearFilter');
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
                <a href="contact.html?id=${car.id}" class="btn-primary" style="display: block; text-align: center; text-decoration: none;">Contact Seller</a>
            </div>
        </div>
    `;
}

// Filter cars based on all criteria
function filterCars() {
    const selectedMake = makeFilter.value.toLowerCase();
    const selectedYear = yearFilter.value;
    const selectedPrice = priceFilter.value;

    return cars.filter(car => {
        // Make filter
        if (selectedMake && !car.make.toLowerCase().includes(selectedMake)) {
            return false;
        }

        // Year filter
        if (selectedYear && car.year.toString() !== selectedYear) {
            return false;
        }

        // Price filter
        if (selectedPrice) {
            const [min, max] = selectedPrice.split('-').map(Number);
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
makeFilter.addEventListener('change', renderCars);
yearFilter.addEventListener('change', renderCars);
priceFilter.addEventListener('change', renderCars);

// Initial render
renderCars();