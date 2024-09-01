// script.js
document
  .getElementById("nn-contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous loss message
    document.getElementById("loss-message").classList.add("hidden");

    // Check if all fields are filled
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    if (!nameField.value || !emailField.value || !messageField.value) {
      // Display the loss message
      document.getElementById("loss-message").classList.remove("hidden");
      return;
    }

    // Hide the form and show the training animation
    document.querySelector(".form-container form").classList.add("hidden");
    document.getElementById("training-animation").classList.remove("hidden");

    // Simulate the training process
    let epoch = 0;
    const totalEpochs = 10;
    const progressBar = document.querySelector(".progress");
    const epochCounter = document.getElementById("epoch-counter");

    const interval = setInterval(() => {
      epoch++;
      progressBar.style.width = `${(epoch / totalEpochs) * 100}%`;
      epochCounter.textContent = `Epoch: ${epoch}`;

      if (epoch >= totalEpochs) {
        clearInterval(interval);
        // Display a success message
        epochCounter.textContent =
          "Training Complete! We’ll get back to you soon.";
        progressBar.style.backgroundColor = "#4caf50";

        // Optionally reset the form after a delay
        setTimeout(() => {
          document.getElementById("nn-contact-form").reset();
          document
            .querySelector(".form-container form")
            .classList.remove("hidden");
          document.getElementById("training-animation").classList.add("hidden");
          progressBar.style.width = "0%"; // Reset the progress bar for the next submission
        }, 2000);
      }
    }, 500); // Adjust the speed of the "training" here

    // After training completes, you can handle the form submission via AJAX or similar here
  });
