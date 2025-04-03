const username = "K40ruu";
const container = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const div = document.createElement("div");
      div.className = "repo";
      div.innerHTML = `
        <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
        <p>${repo.description || "Pas de description fournie."}</p>
        <p><strong>Langage :</strong> ${repo.language || "Inconnu"}</p>
        <p><strong>Mis à jour :</strong> ${new Date(repo.updated_at).toLocaleDateString()}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    container.innerHTML = `<p>Erreur lors du chargement des dépôts 😢</p>`;
    console.error(error);
  });
