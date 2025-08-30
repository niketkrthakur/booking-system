document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("PyXLQninEZYoTtQLV"); // Initialize EmailJS with your Public Key

    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;

        // Prepare email template parameters
        let templateParams = {
            user_name: name,
            user_email: email,
            booking_date: date,
            booking_time: time
        };

        // Send email using EmailJS
        emailjs.send("service_9b0goqu", "template_5hnfui4", templateParams)
            .then(response => {
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("confirmationMessage").innerText = 
                    "Thank you! Your auditorium is booked successfully.";
                
                // Clear the form after successful booking
                document.getElementById("bookingForm").reset();
            }, error => {
                console.log("FAILED...", error);
                alert("Failed to send confirmation email. Please try again.");
            });
    });
});