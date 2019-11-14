window.addEventListener('load', () => {

    // After the existing code
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`sw.js`)
        .then( registration => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
})
.catch(err => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
});
}
});


window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    console.log("beforeinstallEvent triggered")
return false;
});
