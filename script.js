/* Portfolio data: edit this section to personalize the site. */
const profile = {
  name: "Tarik Ouadjou",
  role: "Data Science and Machine Learning Student",
  tagline: "I use mathematics, machine learning and software to turn complex data into useful tools.",
  bio: "Fourth-year CentraleSupélec engineering student specializing in data science and machine learning, looking for a six-month research internship starting between July and September.",
  email: "tarik.ouadjou@student-cs.fr",
  github: "https://github.com/tarikouadjou",
  linkedin: "https://www.linkedin.com/in/tarik-ouadjou-6b61a6292/"
};

const education = [
  { period: "Sept. 2026 — Present", title: "Master 2 — Mathematics, Vision and Learning (Double Degree)", place: "ENS Paris-Saclay — MVA", details: ["Research-oriented master's degree focused on machine learning and artificial intelligence", "Focus: machine learning, statistical learning and optimization", "Current coursework: Foundations of Large Language Models (LLMs) and Object Recognition"] },
  { period: "Sept. 2023 — Present", title: "Engineering Degree", place: "CentraleSupélec", details: ["Generalist engineering training with a broad foundation in science and technology", "Specialization: SDI — Data and Information Sciences", "Master 1 in Fundamental Mathematics at Université Paris-Saclay, pursued in parallel"], coursework: {
    "Mathematics": ["Measure theory", "Advanced probability", "Partial differential equations", "Stochastic integration", "Harmonic analysis", "Algebra (M1)", "Mathematics for Machine Learning (M1)"],
    "Physics": ["Quantum and statistical physics", "Continuum mechanics", "Electronic systems"],
    "Computer Science": ["Python programming", "Parallel Big Data processing infrastructure", "Large-scale distributed optimization and computing"],
      "Data & Information Sciences": ["Statistics and learning", "Signal processing", "Optimization", "Machine learning", "Deep learning (Theoretical & Practice)", "Large-scale distributed optimization and computing", "High-dimensional modeling", "Optimization for computer vision", "Reinforcement learning", "AI for the environment", "Image Processing (M1)"]
  } },
  { period: "Sept. 2021 — Aug. 2023", title: "MP2I–MPI* — Preparatory Class for Grandes Écoles", place: "Lycée Descartes — CPGE", details: ["Two highly intensive years preparing for the French competitive entrance examinations to engineering schools", "Mathematics: analysis, algebra and probability", "Computer science: theoretical foundations of computation, logic and proofs, algorithms and complexity, data structures and programming"] }
];

const skills = [
  { category: "Programming & tools", items: ["Python", "C", "C++", "LaTeX", "SQL", "Excel", "Slurm", "Linux"] },
  { category: "Languages", items: ["French (native)", "English (C1)"] },
  { category: "Personal traits", items: ["Methodical", "Curious", "Enthusiastic", "Synthetic", "Autonomous"] }
];

const interests = ["Climbing", "Running", "Brazilian Jiu-Jitsu", "Cooking"];

const projects = [
  { id: "ska-datachallenge-3b", date: "2026-09", title: "SKA DataChallenge 3b", tags: ["Learning", "Modeling", "Deep Learning"], description: "Deep-learning-based Bayesian inference using fiducial values from SKA cosmological data.", report: "I am working on inferring the ionization fraction during the Epoch of Reionization from an observed 21-cm power spectrum.\n\nTo do this, we generate fiducial power spectra with 21cmFAST and use them to build the dataset.\n\nThe idea is then to use MCMC to infer the astrophysical parameters. The issue is that running 21cmFAST for every likelihood evaluation is too slow.\n\nWe are therefore building a deep learning surrogate model to reproduce the simulator much faster and make the inference practical.", reportUrl: "", reportConfidential: true, github: "https://github.com/TarikOuadjou/SkaData" },
  { date: "2024-06", title: "Energy Prediction", tags: ["Learning", "Machine Learning"], description: "A machine learning project proposed by EDF.", report: "A notebook based machine learning project proposed by EDF. The goal was to provide EDF with the amount of controllable energy to produce at each moment of the day, i.e. the consumption after removing the solar and wind production that cannot be controlled.\n\nTo do that, I built three different pipelines for consumption, solar production and wind production, and trained 48 different models, one for each time slot of the day. Each model was based on a GAM.\n\nThis was my first real introduction to machine learning, with very high-quality data, and most of the effort was focused on feature engineering and choosing the right ML model.", reportUrl: "./report/EI_EDF.pdf", github: "https://github.com/TarikOuadjou/Energy_Prediction" },
  { date: "2024-12", title: "3D Engine", tags: ["Modeling"], description: "A C-based experiment in 3D rendering and engine development.", report: "A CentraleSupélec project exploring the foundations of a small 3D engine and real-time graphics programming.", reportUrl: "", github: "https://github.com/TarikOuadjou/3D-Engine" },
  { date: "2024-12", title: "An Basic Neural Network build in C", tags: ["Learning", "Deep Learning"], description: "A basic neural network built from scratch in C.", report: "A basic neural network built entirely by myself in C, without any external library. The goal was to understand the architecture more deeply, from the forward pass to the training loop and inference process.\n\nAfter that, I used the model to try to recognize a handwritten number from a simple drawn input.", reportUrl: "", github: "https://github.com/TarikOuadjou/Number_IA" },
  { date: "2023-07", title: "Error Correcting Code", tags: ["Theory", "Modeling"], description: "Python implementation and experiments around error-correcting codes.", report: "From-scratch implementation of cyclic error-correcting codes in Python for image restoration.\n\nThe project focuses on the theoretical modeling and implementation of cyclic codes to ensure reliable data transmission over noisy channels.\n\nWe implemented from scratch in Python an algebraic encoder and a syndrome decoder, using integer bit-shifting to optimize polynomial arithmetic in F_2[X].\n\nThe method was then validated by restoring corrupted images.", reportUrl: "./report/Rapport_Code_Cyclique.pdf", github: "https://github.com/TarikOuadjou/Error_Correcting_Code" },
  { date: "2024-02", title: "3D DNA Plasmid Modeling", tags: ["Learning", "Machine Learning", "Health"], description: "From-scratch implementation of a genetic algorithm and simulated annealing for DNA.", report: "Project focused on the 3D circularization of DNA to address a biological objective while respecting the physical constraints of the model, including dinucleotide symmetries and continuity of junction angles.\n\nWe implemented from scratch in object-oriented Python two optimization metaheuristics: simulated annealing and a genetic algorithm.", reportUrl: "./report/Rapport_3DNA.pdf", github: "https://github.com/TarikOuadjou/3DNA" },
  { date: "2025-01", title: "Study of Differential Equations with Fractal Boundaries", tags: ["Theory", "Modeling"], description: "Research project on the Navier–Stokes equation with fractal boundary conditions.", report: "This project studies the Navier–Stokes equation on domains with fractal boundaries.\n\nThe idea is to define adapted operators, such as a normal derivative in the fractal setting, in order to build a meaningful formulation of the problem in irregular geometries.\n\nThe main objective is to prove existence and uniqueness of the solution. Once this is established, it becomes possible to design a numerical scheme that converges reliably toward the solution.\n\nI also wrote the report in LaTeX and explored the analytical framework behind these boundary conditions.", reportUrl: ["./report/Projet_Fluide_1A.pdf", "./report/Projet_Fluide_2A.pdf"], github: "" },
  { id: "edf-predictive-maintenance", date: "2026-01", title: "Predictive Maintenance for Nuclear Plant Sensors", tags: ["Learning", "Machine Learning", "Industry"], description: "Machine learning model to predict the health of nuclear power plant sensors for predictive maintenance.", report: "During the first part of my gap year at EDF, I built a model to predict the health of sensors across the French nuclear power fleet.\n\nA large part of the work was dealing with the data. It was spread across several internal systems, so I had to collect, combine and clean it before using it for training.\n\nI tested GAM, Random Forest and Linear Regression models. Because the data were noisy and only a small amount was labelled, Random Forest gave the most convincing results.\n\nI then packaged the solution as a Streamlit application so maintenance teams could easily use it on site.", reportUrl: "", reportConfidential: true, github: "", githubConfidential: true }
];

const experience = [
  { period: "Feb. 2026 — July 2026", title: "Research Intern", place: "Sejong University — Seoul, South Korea", highlights: ["Developed a probabilistic machine learning pipeline for Bayesian inference on cosmological data to understand the Epoch of Reionization as part of the SKA Science Data Challenge.", "Awarded a competitive CentraleSupélec Foundation scholarship based on academic merit and research project relevance."], projectLink: "#project-ska-datachallenge-3b", skills: ["Python", "Deep learning", "High-performance computing"] },
  { period: "July 2025 — Jan. 2026", title: "Data Scientist Intern", place: "EDF — Saint-Denis, France", highlights: ["Conducted ad-hoc data analyses to support operational issues across nuclear power plants.", "Developed a predictive maintenance model for nuclear plant sensors, reducing required maintenance interventions by a factor of two."], projectLink: "#project-edf-predictive-maintenance", skills: ["Python", "Predictive maintenance", "Industrial data analysis", "Decision support"] },
  { period: "Dec. 2023 — Jan. 2025", title: "Secretary General", place: "OSER — Association for Equal Opportunities, Gif-sur-Yvette, France", highlights: ["Ensured statutory and legal compliance for an association with 60 members and a €75k annual budget.", "Managed the IT department and organized weekly tutoring sessions.", "Led a two-week preparation program for 20 high school students."], skills: ["Organization", "Pedagogy", "Writing", "Project management"] },
  { period: "Academic year 2023 — 2024", title: "Teaching Assistant", place: "CentraleSupélec — Gif-sur-Yvette, France", highlights: ["Taught applied mathematics to first-year students, covering PDEs, convergence, integration and probability."], skills: ["Pedagogy", "Organization", "Communication"] }
];

const routes = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

let activeTag = "All";

function formatDate(ymd) {
  const [year, month] = ymd.split("-");
  const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
  return months[parseInt(month, 10) - 1] + " " + year;
}

function heroSvg() {
  return `<svg viewBox="0 0 320 220" role="img" aria-label="Scatter plot with a fitted curve">
    <g fill="var(--ink-soft)" opacity="0.55">
      <circle cx="26" cy="150" r="3"></circle><circle cx="52" cy="170" r="3"></circle><circle cx="70" cy="120" r="3"></circle><circle cx="95" cy="140" r="3"></circle><circle cx="118" cy="95" r="3"></circle><circle cx="140" cy="110" r="3"></circle><circle cx="160" cy="70" r="3"></circle><circle cx="185" cy="88" r="3"></circle><circle cx="205" cy="55" r="3"></circle><circle cx="230" cy="60" r="3"></circle><circle cx="250" cy="35" r="3"></circle><circle cx="275" cy="45" r="3"></circle><circle cx="295" cy="20" r="3"></circle>
    </g>
    <path id="fit-line" d="M20,165 C 90,150 130,90 170,80 S 260,40 300,18" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"></path>
    <line x1="18" y1="18" x2="18" y2="185" stroke="var(--rule)" stroke-width="1"></line><line x1="18" y1="185" x2="305" y2="185" stroke="var(--rule)" stroke-width="1"></line>
  </svg>`;
}

function renderHome() {
  const latest = [...projects].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);
  return `<div class="page"><div class="hero"><div><h1>${profile.name}</h1><p class="tagline">${profile.tagline}</p><p>${profile.bio}</p><div class="cta-row"><a class="btn primary" href="#projects">View my projects</a><a class="btn" href="#contact">Get in touch</a></div></div><div class="hero-visual">${heroSvg()}</div></div><div class="section-label">selected projects</div><div class="home-preview-list">${latest.map(projectEntry).join("")}</div></div>`;
}

function projectEntry(project) {
  const projectIndex = projects.indexOf(project);
  const githubLink = project.github ? `<a href="${project.github}" target="_blank" rel="noopener">GitHub</a>` : (project.githubConfidential ? `<span class="private-note">GitHub confidential</span>` : "");
  return `<article class="entry"${project.id ? ` id="project-${project.id}"` : ""}><div class="entry-meta">${formatDate(project.date)}</div><div><h3>${project.title}</h3><div class="entry-tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div><p>${project.description}</p><div class="entry-links"><button class="project-details" type="button" data-project="${projectIndex}">Details</button>${githubLink}</div></div></article>`;
}

function renderProjects() {
  const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  const sorted = [...projects].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = activeTag === "All" ? sorted : sorted.filter(project => project.tags.includes(activeTag));
  return `<div class="page"><h2>Projects</h2><p class="tagline">A selection of research and industrial machine learning work.</p><div class="filter-row">${allTags.map(tag => `<button class="chip ${tag === activeTag ? "active" : ""}" data-tag="${tag}" type="button">${tag}</button>`).join("")}</div>${filtered.length ? filtered.map(projectEntry).join("") : `<p class="empty-note">No project matches this tag yet.</p>`}</div>`;
}

function renderResume() {
  return `<div class="page"><h2>Resume</h2><div class="section-label">Education</div><div class="timeline">${education.map(entry => `<div class="t-entry"><div class="t-period">${entry.period}</div><h3>${entry.place}</h3><div class="t-place">${entry.title}</div><ul class="education-details">${entry.details.map(detail => `<li>${detail}</li>`).join("")}</ul>${entry.coursework ? `<details class="coursework"><summary>Coursework</summary><div class="coursework-menu">${Object.entries(entry.coursework).map(([category, courses]) => `<details class="coursework-group"><summary>${category}</summary><ul>${courses.map(course => `<li>${course}</li>`).join("")}</ul></details>`).join("")}</div></details>` : ""}</div>`).join("")}</div><div class="section-label">Experience</div><div class="timeline">${experience.map(entry => `<div class="t-entry"><div class="t-period">${entry.period}</div><h3>${entry.title}</h3><div class="t-place">${entry.place}</div>${entry.highlights ? `<ul class="experience-highlights">${entry.highlights.map(highlight => `<li>${highlight}</li>`).join("")}</ul>` : `<p>${entry.description}</p>`}${entry.projectLink ? `<div class="experience-project-link"><a href="${entry.projectLink}">View related project</a></div>` : ""}<div class="entry-tags">${entry.skills.map(skill => `<span class="tag">${skill}</span>`).join("")}</div></div>`).join("")}</div><div class="section-label">Skills</div><div class="skills-grid">${skills.map(skill => `<div class="skill-group"><h4>${skill.category}</h4><div class="skill-chips">${skill.items.map(item => `<span class="tag">${item}</span>`).join("")}</div></div>`).join("")}</div><div class="section-label">Interests</div><div class="interest-list">${interests.map(interest => `<span class="interest-item">${interest}</span>`).join("")}</div></div>`;
}

function renderContact() {
  return `<div class="page"><h2>Contact</h2><p class="tagline">I am looking for a six-month research internship starting between July and September.</p><ul class="contact-list"><li><a href="mailto:${profile.email}">${profile.email}</a></li><li><a href="${profile.github}" target="_blank" rel="noopener">${profile.github.replace("https://", "")}</a></li><li><a href="${profile.linkedin}" target="_blank" rel="noopener">${profile.linkedin.replace("https://", "")}</a></li></ul></div>`;
}

function projectModal() {
  return `<div class="modal" id="projectModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" hidden><div class="modal-backdrop" data-close-modal></div><section class="modal-panel"><button class="modal-close" type="button" aria-label="Close project details" data-close-modal>&times;</button><div class="entry-meta" id="modalDate"></div><h2 id="modalTitle"></h2><div class="entry-tags" id="modalTags"></div><p class="modal-summary" id="modalSummary"></p><div class="section-label">Quick explanation</div><p id="modalReport"></p><div class="entry-links" id="modalLinks"></div></section></div>`;
}

const views = { home: renderHome, projects: renderProjects, resume: renderResume, contact: renderContact };

function currentRoute() {
  const hash = location.hash.replace("#", "");
  if (hash.startsWith("project-")) return "projects";
  return views[hash] ? hash : "home";
}

function navLinksHtml() {
  const route = currentRoute();
  return routes.map(routeItem => `<a href="#${routeItem.id}" ${routeItem.id === route ? 'aria-current="page"' : ""}>${routeItem.label}</a>`).join("");
}

function shell() {
  return `<div class="shell"><aside class="sidebar"><div><div class="brand-name">${profile.name}</div><div class="brand-role">${profile.role}</div></div><nav class="main-nav" aria-label="Main navigation">${navLinksHtml()}</nav><div class="sidebar-footer"><a href="${profile.github}" target="_blank" rel="noopener">github</a><a href="${profile.linkedin}" target="_blank" rel="noopener">linkedin</a><a href="mailto:${profile.email}">email</a></div></aside><main class="main"><div class="mobile-bar"><div class="brand-name" style="font-size:1.05rem">${profile.name}</div><button class="mobile-toggle" id="mobileToggle" type="button" aria-controls="mobileNav" aria-expanded="false">menu</button></div><nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">${navLinksHtml()}</nav><div id="content"></div></main></div><footer class="page-footer">© ${new Date().getFullYear()} ${profile.name}</footer>${projectModal()}`;
}

function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  const modal = document.getElementById("projectModal");
  document.getElementById("modalDate").textContent = formatDate(project.date);
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalTags").innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  document.getElementById("modalSummary").textContent = project.description;
  document.getElementById("modalReport").textContent = project.report;

  const reportUrls = Array.isArray(project.reportUrl) ? project.reportUrl : (project.reportUrl ? [project.reportUrl] : []);
  const reportLink = reportUrls.length
    ? reportUrls.map((url, index) => `<a href="${url}" target="_blank" rel="noopener">${reportUrls.length > 1 ? `Open PDF report ${index + 1}` : "Open PDF report"}</a>`).join("")
    : (project.reportConfidential ? `<span class="private-note">Report confidential</span>` : "");
  const githubLink = project.github ? `<a href="${project.github}" target="_blank" rel="noopener">Open GitHub</a>` : (project.githubConfidential ? `<span class="private-note">GitHub confidential</span>` : "");
  document.getElementById("modalLinks").innerHTML = `${reportLink}${githubLink}`;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function attachEvents() {
  const toggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
  document.querySelectorAll(".mobile-nav a, .main-nav a").forEach(link => link.addEventListener("click", () => {
    if (!mobileNav || !toggle) return;
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
  document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
    activeTag = chip.dataset.tag;
    document.getElementById("content").innerHTML = renderProjects();
    attachEvents();
  }));
  document.querySelectorAll(".project-details").forEach(button => button.addEventListener("click", () => openProjectModal(Number(button.dataset.project))));
  document.querySelectorAll("[data-close-modal]").forEach(element => element.addEventListener("click", closeProjectModal));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProjectModal();
  }, { once: true });
  const fitLine = document.getElementById("fit-line");
  if (fitLine) {
    requestAnimationFrame(() => fitLine.style.transition = "stroke-dashoffset 1s ease");
    requestAnimationFrame(() => fitLine.style.strokeDashoffset = "0");
  }
}

function render() {
  document.getElementById("app").innerHTML = shell();
  document.getElementById("content").innerHTML = views[currentRoute()]();
  attachEvents();
  if (location.hash.startsWith("#project-")) {
    requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
}

window.addEventListener("hashchange", render);
render();
