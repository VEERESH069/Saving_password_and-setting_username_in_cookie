document.addEventListener('DOMContentLoaded', function () {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }
  let count = getCookie('count');
  
  if (count) {
    count = parseInt(count) + 1; 
  } else {
    count = 1; 
  setCookie('count', count, 7); 
  document.getElementById('counter').textContent = `Page loaded ${count} times.`;}
});
