document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const comment = document.getElementById('comment').value;

    // Create an object with form data
    const formData = {
        comment: comment,
    };

    let existingData = sessionStorage.getItem('formData');
    existingData = existingData ? JSON.parse(existingData) : [];

    // Append the new form data to the existing array
    existingData.push(formData);

    // Convert the updated array to a JSON string and store it in session storage
    sessionStorage.setItem('formData', JSON.stringify(existingData));

    location.reload();
    
    // Show an alert
    alert('Form submitted and data stored in session storage!');
});