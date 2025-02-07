window.onload = function () {
    // Texts to show in sequence
    const texts = [
        "Onto the Big Question..",
        "Fuck, I'm sweating",
        "umm .. how do i say this .. "
    ];

    let counter = 0;
    const textElement = document.getElementById('text');
    const box = document.getElementById('box');
    const boxWrapper = document.querySelector('.box-wrapper');

    // Function to change the text with an interval
    function changeText() {
        if (counter < texts.length) {
            textElement.textContent = texts[counter];
            counter++;
        } else {
            clearInterval(textInterval); // Stop after all texts have been shown
            startShaking(); // Start shaking effect after all texts are shown
        }
    }

    // Show the first text immediately
    changeText();

    // Change text every 2 seconds
    const textInterval = setInterval(changeText, 2000);

    // Function to start shaking effect
    function startShaking() {
        let shakeIntensity = 1;
        const shakeInterval = setInterval(() => {
            boxWrapper.style.transform = `translate(${Math.random() * shakeIntensity * 2 - shakeIntensity}px, ${Math.random() * shakeIntensity * 2 - shakeIntensity}px)`;
            shakeIntensity += 1; // Increase shake intensity over time

            if (shakeIntensity > 20) {
                clearInterval(shakeInterval); // Stop shaking
                fadeOutText(); // Fade out the text before expanding
            }
        }, 50); // Shake every 50ms
    }

    // Function to fade out the text
    function fadeOutText() {
        textElement.style.transition = 'opacity 0.5s ease'; // Smooth fade-out transition
        textElement.style.opacity = '0'; // Fade out the text

        // Wait for the fade-out to complete, then expand the box
        setTimeout(expandBox, 500); // 500ms delay to match the fade-out duration
    }

    // Function to expand the box to fill the screen
    function expandBox() {
        box.style.width = '100vw'; // Expand to full screen width
        box.style.height = '100vh'; // Expand to full screen height
        box.style.borderRadius = '0'; // Remove border radius
        box.style.transition = 'width 1s ease, height 1s ease, border-radius 1s ease'; // Smooth transition

        // Create and show the new message after a delay
        setTimeout(() => {
            const newMessage = document.createElement('div');
            newMessage.id = 'new-message';
            newMessage.textContent = "Will you be my Valentine?";
            document.body.appendChild(newMessage);

            // Add two "Yes" buttons below the new message after a delay
            setTimeout(() => {
                const buttonContainer = document.createElement('div');
                buttonContainer.id = 'button-container';

                const yesButton1 = document.createElement('div');
                yesButton1.className = 'yes-button';
                yesButton1.textContent = 'Yes';
                buttonContainer.appendChild(yesButton1);

                const yesButton2 = document.createElement('div');
                yesButton2.className = 'yes-button';
                yesButton2.textContent = 'Yes';
                buttonContainer.appendChild(yesButton2);

                document.body.appendChild(buttonContainer);

                // Fade in the buttons
                setTimeout(() => {
                    buttonContainer.style.opacity = '1';
                }, 100); // Small delay to trigger the fade-in effect

                // Add event listeners to the "Yes" buttons
                yesButton1.addEventListener('click', () => {
                    window.location.href = 'last2.html'; // Redirect to new HTML page
                });

                yesButton2.addEventListener('click', () => {
                    window.location.href = 'last2.html'; // Redirect to new HTML page
                });
            }, 2000); // Delay before buttons appear (1 second after the text)
        }, 1000); // Delay to match the expansion transition
    }
};