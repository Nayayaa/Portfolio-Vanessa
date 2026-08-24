const areaSocials = document.getElementById("socials");
// Redes
areaSocials.innerHTML = dados.redes
  .map((rede) => `
    <a class="social-btn" href="${rede.url}" target="_blank" rel="noopener">
      ${icones[rede.icones]}
      <span>${rede.rotulo}</span>
    </a>
  `)
  .join("");

const areaSkills = document.getElementById("skills-grid");
// Habilidades
areaSkills.innerHTML = dados.habilidades
  .map((grupo, i) => {
    // .map de dentro
    const pills = grupo.itens
      .map((item) => `
        <span class="skill-pill">
          ${item.icone ? `<i class="${item.icone}"></i>` : ""}
          ${item.nome}
        </span>
      `)
      .join("");

    // .map de fora
    return `
      <div class="skill-category">
        <div class="category-title">
          <span class="category-num">${String(i + 1).padStart(2, "0")}</span>
          ${grupo.categoria}
        </div>
        <div class="skill-pills">${pills}</div>
      </div>
    `;
  })
  .join("");

const areaTimeline = document.getElementById("timeline");
// Projetos
const total = dados.projetos.length;
        document.getElementById("projects-count").textContent =
        String(total).padStart(2, "0") + (total === 1 ? " item" : " ITEMS");

areaTimeline.innerHTML = dados.projetos
  .map((projeto) => {
    // tags
    const tagsHTML = projeto.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");
    
    return `
      <article class="project">
        <div class="year">${projeto.ano}</div>
        <div class="project-card">

          <div class="project-thumb">
            ${projeto.video
              ? `<video class="project-video" autoplay muted loop playsinline${projeto.imagem ? ` poster="${projeto.imagem}"` : ""}>
                  <source src="${projeto.video}" type="video/mp4">
                </video>`
              : projeto.imagem
                ? `<img src="${projeto.imagem}" alt="${projeto.titulo}">`
                : `<span>preview do projeto</span>`
}

          </div>

          <div class="project-body">
            <div class="project-head">
              <h3>${projeto.titulo}</h3>
              ${projeto.repo ? `
              <a href="${projeto.repo}" target="_blank" rel="noopener" aria-label="Repositório de ${projeto.titulo}">
                ${icones.github}
              </a>
            ` : ""} 
            </div>
            <p class="desc">${projeto.descricao}</p>
            <div class="tags">${tagsHTML}</div>
          </div>

        </div>
      </article>
    `;
  })
  .join("");

// Partículas do fundo e repetições
const areaParticulas = document.getElementById("particles");
const simbolos = ["{", "}", "</>", "01", "=>", ";", "[]", "()", "fn", "&&", "//", "==", "++", "/*", "*/", "<>", "if", "else"];
const QUANTIDADE = 25;

// Criando uma partícula por vez
for (let i = 0; i < QUANTIDADE; i++) {
  const particula = document.createElement("span");
  particula.className = "particle";
  particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

  // Posição e tempos aleatórios
  const duracao = 12 + Math.random() * 14;
  particula.style.left = Math.random() * 100 + "%";
  particula.style.animationDuration = duracao + "s";
  particula.style.animationDelay = -Math.random() * duracao + "s";
  particula.style.fontSize = 11 + Math.random() * 6 + "px";
  areaParticulas.appendChild(particula);
}