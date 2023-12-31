// Get references to the input field, search button, and results list.
const brandInput = document.getElementById('brandInput');
const searchButton = document.getElementById('searchButton');
const resultsList = document.getElementById('resultsList');

// Event listener for the search button click.
searchButton.addEventListener('click', () => {
    const brand = brandInput.value;

    // Check if the brand input is not empty.
    if (brand.trim() !== '') {
        // Make an AJAX request to your server or API to fetch search results.
        // Replace 'your-api-endpoint' with the actual URL of your search API.
        const apiUrl = `https://your-api-endpoint?brand=${encodeURIComponent(brand)}`;

        // Assuming you are using the fetch API for the request.
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Clear previous search results.
                resultsList.innerHTML = '';

                // Iterate through the search results and display them.
                data.forEach(result => {
                    const listItem = document.createElement('li');
                    listItem.textContent = result;
                    resultsList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.left = `${100 * (i - index)}%`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically change slides every 5 seconds (5000 milliseconds).
setInterval(nextSlide, 500);