document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    // Find if this is a newsletter or contact form
    const isNewsletter =
      form.querySelector('input[placeholder*="@"]') &&
      !form.querySelector("textarea");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop page reload

      // 1. Collect Data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // 2. Button State (Loading)
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : "Submit";
      if (submitBtn) submitBtn.innerHTML = "Sending...";

      // 3. Send Data (Example using Formspree)
      // Replace 'YOUR_FORMSPREE_ID' with your actual ID, e.g., 'f/mbjnojk'
      // For now, we simulate a successful submission for the demo

      setTimeout(() => {
        // Simulate API call success
        alert(
          isNewsletter
            ? "Thank you for subscribing!"
            : "Message sent successfully!",
        );
        form.reset();
        if (submitBtn) submitBtn.innerHTML = originalText;
      }, 1000);

      /* 
            // REAL IMPLEMENTATION:
            fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error submitting form.');
            })
            .finally(() => {
                if(submitBtn) submitBtn.innerHTML = originalText;
            });
            */
    });
  });
});
