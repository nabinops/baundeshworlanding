document.getElementById('enquiry-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const spinner = document.getElementById('submit-spinner');
    const btnText = submitBtn.querySelector('span');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    // Reset state
    successMsg.classList.add('hidden');
    errorMsg.classList.add('hidden');
    btnText.textContent = 'Sending...';
    spinner.classList.remove('hidden');
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const rawData = Object.fromEntries(formData.entries());

    // Map to backend EnquiryRequestDto format and add required static data
    const data = {
        fullName: rawData.name,
        email: rawData.email,
        phone: rawData.phone,
        companyName: rawData.company,
        service: rawData.service,
        message: rawData.message,
        source: 'WEBSITE',
        priority: 'LOW',
        preferredDeliveryTime: null,
        deliveryAddress: null,
        quantity: null
    };

    try {
        const apiUrl = 'https://apii.abinashtiwari.com.np/api/v1/enquiries';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-client-id': 'baundeshwor',
                'x-app-version': '0.0.0',
                'x-service': 'order'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            successMsg.classList.remove('hidden');
            form.reset();
        } else {
            errorMsg.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        errorMsg.classList.remove('hidden');
    } finally {
        btnText.textContent = 'Send Message';
        spinner.classList.add('hidden');
        submitBtn.disabled = false;
    }
});
