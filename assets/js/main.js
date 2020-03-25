
const urlFragment = window.location.href.split("?");
const shortlink = (urlFragment.length > 0 ? urlFragment[1] : "");

if (shortlink) {
    redirectToPage(shortlink);
}


function redirectToPage(shortlnk) {
    if (typeof urlMap !== 'undefined') {
        const actualLink = urlMap[shortlnk];
        if (actualLink) {
            document.documentElement.innerHTML = ("<body>Redirecting you to <b>" +  actualLink + "</b></body>");
            window.location.replace(actualLink);
        }
    }
}