document.getElementById("startButton").addEventListener("click", function() {
    // Carregar e exibir a página "startpage.html" aqui
    fetch("Pages/startpage.html")
        .then(response => response.text())
        .then(content => {
            document.body.innerHTML = content;
        })
        .catch(error => console.error(error));
});
