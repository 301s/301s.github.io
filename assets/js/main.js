
const urlFragment = window.location.href.split("?");
const shortlink = (urlFragment.length > 0 ? urlFragment[1] : "");

if (shortlink) {
    redirectToPage(shortlink);
}


function redirectToPage(shortlnk) {
    if (typeof urlMap !== 'undefined') {
        const actualLink = urlMap[shortlnk];
        if (actualLink) {
            document.documentElement.innerHTML = ''
            document.write("Redirecting you to <b>" +  actualLink + "</b>");
            window.location.replace(actualLink);
        }
    }
}