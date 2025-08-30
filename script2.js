// Initialize auditorium with 50 seats (10 rows, 5 seats each)
const totalSeats = 50;
let bookedSeats = [];

// Generate the auditorium seats
const seatsContainer = document.getElementById('seats');
for (let i = 1; i <= totalSeats; i++) {
    const seatButton = document.createElement('div');
    seatButton.classList.add('seat');
    seatButton.textContent = i;
    seatButton.id = `seat-${i}`;
    seatButton.onclick = () => selectSeat(i);

    seatsContainer.appendChild(seatButton);
}

// Function to handle seat selection
function selectSeat(seatNumber) {
    if (bookedSeats.includes(seatNumber)) {
        alert(`Seat ${seatNumber} is already booked.`);
        return;
    }

    // Toggle seat selection
    const seatElement = document.getElementById(`seat-${seatNumber}`);
    seatElement.classList.toggle('booked');

    if (seatElement.classList.contains('booked')) {
        bookedSeats.push(seatNumber);
    } else {
        bookedSeats = bookedSeats.filter(seat => seat !== seatNumber);
    }
}

// Handle booking form submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const seatCount = parseInt(document.getElementById('seatCount').value);

    if (seatCount < 1 || seatCount > totalSeats - bookedSeats.length) {
        alert('Please select a valid number of seats.');
        return;
    }

    // Check if there are enough available seats
    if (seatCount <= totalSeats - bookedSeats.length) {
        const availableSeats = [];
        for (let i = 1; i <= totalSeats; i++) {
            if (!bookedSeats.includes(i)) {
                availableSeats.push(i);
            }
        }

        const selectedSeats = availableSeats.slice(0, seatCount);
        selectedSeats.forEach(seat => {
            document.getElementById(`seat-${seat}`).classList.add('booked');
            bookedSeats.push(seat);
        });

        document.getElementById('booking-status').textContent = `${seatCount} seats have been booked successfully!`;
    }
});