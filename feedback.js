const stars = document.querySelectorAll('.star');
        const ratingValue = document.getElementById('ratingValue');
        let isRated = false; // Prevents multiple clicks

        stars.forEach(star => {
            star.addEventListener('mouseover', function () {
                if (isRated) return;
                resetStars();
                this.classList.add('hover');
                let prevSibling = this.previousElementSibling;
                while (prevSibling) {
                    prevSibling.classList.add('hover');
                    prevSibling = prevSibling.previousElementSibling;
                }
            });

            star.addEventListener('mouseout', function () {
                if (isRated) return;
                resetStars();
            });

            star.addEventListener('click', function () {
                if (isRated) return;
                isRated = true; // Lock rating after click
                resetStars();
                this.classList.add('clicked');
                let prevSibling = this.previousElementSibling;
                while (prevSibling) {
                    prevSibling.classList.add('clicked');
                    prevSibling = prevSibling.previousElementSibling;
                }
                ratingValue.textContent = `Rating: ${this.getAttribute('data-value')}`;
            });
        });

        function resetStars() {
            stars.forEach(star => star.classList.remove('hover', 'active', 'clicked'));
        }

        function submitFeedback() {
            let feedback = document.getElementById('feedback').value;
            let feedbackMessage = document.getElementById('feedbackMessage');

            if (feedback.trim() === "") {
                feedbackMessage.textContent = "Please enter some feedback!";
                feedbackMessage.style.color = "black";
            } else {
                feedbackMessage.textContent = "Thank you for your feedback!";
                feedbackMessage.style.color = "green";
                document.getElementById('feedback').value = ""; // Clear input after submission
            }
        }