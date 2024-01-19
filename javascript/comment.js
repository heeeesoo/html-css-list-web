function displayStoredData() {
    const displayContainer = document.getElementById('comment-display');
    
    // Retrieve data from session storage
    const storedData = sessionStorage.getItem('formData');
    
    // Parse the JSON string to get an array
    const dataArray = storedData ? JSON.parse(storedData) : [];
    
    // Display data on the page
    if (dataArray.length > 0) {
      displayContainer.innerHTML += '<ul>';
      dataArray.forEach(entry => {
        displayContainer.innerHTML += `<li>${entry.comment}</li>`;
      });
      displayContainer.innerHTML += '</ul>';
    } else {
      displayContainer.innerHTML += '<p>댓글이 없습니다.</p>';
    }
}

// Call the function to display stored data on page load
displayStoredData();

function addEventImg(elementId){
  const navImg = document.getElementById(elementId);
  navImg.href = '../index.html';

  navImg.addEventListener('click', function(event) {
      // You can prevent the default behavior if needed
      event.preventDefault();

      // Navigate to the link URL
      window.location.href = this.href;
  });
};

addEventImg('nav-img')