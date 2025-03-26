document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the current count from the cookie
  let count = getCookie('count');
  
  // Check if the cookie exists
  if (count) {
    count = parseInt(count) + 1; // Increment the count
  } else {
    count = 1; // Initialize count if it doesn't exist
  }

  // Update the cookie with the new count value
  setCookie('count', count, 7); // Expires in 7 days

  // Display the count on the webpage
  const countDisplay = document.createElement('p');
  countDisplay.textContent = `Page loaded ${count} times.`;
  document.body.appendChild(countDisplay);
});
