document.addEventListener("DOMContentLoaded", function() {
    
    const ulProjeto = document.getElementById('projects')

    fetch('https://api.github.com/users/BiancaSLougue/repos')
    .then(response => response.json())
    .then(data => {

        data.forEach(repo => {
            let projeto = document.createElement('li')

            projeto.innerHTML = `<a href='${repo.html_url}' target='_blank'>${repo.name}</a>`
    
            ulProjeto.appendChild(projeto)
        });
    })
})
