
const username = "K40ruu";
const container = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "card sr";
      card.innerHTML = `
        <h2><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: inherit;">${repo.name}</a></h2>
        <p>${repo.description || "Pas de description fournie."}</p>
        <span class="lang">${repo.language || "Inconnu"}</span>
      `;
      container.appendChild(card);
    });

    ScrollReveal().reveal('.sr', {
      distance: '40px',
      duration: 800,
      easing: 'ease-out',
      origin: 'bottom',
      interval: 100
    });
  })
  .catch(err => {
    container.innerHTML = '<p>Erreur lors du chargement des projets.</p>';
  });
