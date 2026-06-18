function renderResearch(items) {
  const container = document.querySelector("#research-list");
  container.innerHTML = items
    .map(
      (item) => `
        <article class="research-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderPublications(items) {
  const container = document.querySelector("#publication-list");
  container.innerHTML = items
    .map(
      (item) => `
        <article class="publication">
          <div>
            <h3>${item.title}</h3>
            <p class="pub-meta">${item.authors}<br>${item.venue}</p>
            <div class="pub-links">
              ${item.links
                .map((link) => `<a href="${link.url}">${link.label}</a>`)
                .join("")}
            </div>
          </div>
          <span class="tag">${item.type}</span>
        </article>
      `
    )
    .join("");
}

function renderNews(items) {
  const container = document.querySelector("#news-list");
  container.innerHTML = items
    .map(
      (item) => `
        <li>
          <time datetime="${item.date}">${item.date}</time>
          <p>${item.text}</p>
        </li>
      `
    )
    .join("");
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderResearch(siteData.research);
renderPublications(siteData.publications);
renderNews(siteData.news);
