document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("input[placeholder='Your Name']");
    const fatherNameInput = form.querySelector("input[placeholder='Father Name']");
    const emailInput = form.querySelector("input[type='email']");
    const phoneInput = form.querySelector("input[placeholder='Your Phone']");
    const complaintInput = form.querySelector("textarea[placeholder='Your Complaint']");
    const button = form.querySelector("button");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        let isValid = true;

        // Clear previous error messages
        form.querySelectorAll(".error").forEach(error => error.remove());

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            isValid = false;
        }

        // Validate Father Name
        if (fatherNameInput.value.trim() === "") {
            showError(fatherNameInput, "Father Name is required.");
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Invalid email format.");
            isValid = false;
        }

        // Validate Phone
        const phonePattern = /^[0-9]{10,15}$/; // Adjust pattern as per your requirement
        if (!phonePattern.test(phoneInput.value.trim())) {
            showError(phoneInput, "Phone number must be 10-15 digits.");
            isValid = false;
        }

        // Validate Complaint
        if (complaintInput.value.trim() === "") {
            showError(complaintInput, "Complaint is required.");
            isValid = false;
        }

        if (isValid) {
            alert("Complaint registered successfully!");
            form.reset(); // Reset the form
        }
    });

    function showError(inputElement, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.style.color = "red";
        errorDiv.style.marginTop = "5px";
        errorDiv.textContent = message;
        inputElement.parentNode.appendChild(errorDiv);
    }
});
