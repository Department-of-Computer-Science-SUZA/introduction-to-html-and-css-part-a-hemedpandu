document.addEventListener("DOMContentLoaded", function () {
    const cookieHeader = document.getElementById("cookie-header");
    cookieHeader.style.color = "#f7f16d";

    const cookieCountP = document.getElementById("cookie-count");
    const cookieJar = document.getElementById("cookie-jar");

    function updateCookieCount() {
        const cookies = cookieJar.getElementsByClassName("cookie");
        const count = cookies.length;
        cookieCountP.textContent = `${count}! There are ${count} cookie(s) in the cookie jar!`;
    }

    updateCookieCount(); 

    setInterval(function () {
        const cookies = cookieJar.getElementsByClassName("cookie");
        if (cookies.length > 0) {
            const lastCookie = cookies[cookies.length - 1];
            cookieJar.removeChild(lastCookie);
            updateCookieCount();
        }
    }, 30000);
});
