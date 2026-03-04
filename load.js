function loadExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';

    script.onload = () => {
        console.log("Script has finished loading and is ready to use.");
    };

    document.head.appendChild(script);
}

// Attach to button
document.querySelector('#start-1v1').addEventListener('click', () => {
    loadExternalScript('startChess.js');
});