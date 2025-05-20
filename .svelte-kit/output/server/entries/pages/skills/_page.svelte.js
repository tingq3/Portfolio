import { f as ensure_array_like, h as attr, i as attr_class, e as escape_html } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
function _page($$payload) {
  const sections = [
    {
      name: "Design Patterns",
      path: "/Portfolio/skills/design-patterns",
      class: "blue",
      description: "Established solutions to common software architecture challenges."
    },
    {
      name: "Test-Driven Development",
      path: "/Portfolio/skills/test-driven-development",
      class: "yellow",
      description: "A development methodology that emphasizes writing tests prior to implementation."
    },
    {
      name: "Frontend Development",
      path: "/Portfolio/skills/frontend",
      class: "pink",
      description: "Development of responsive and interactive user interfaces using modern frameworks."
    },
    {
      name: "Backend Development",
      path: "/Portfolio/skills/backend",
      class: "darkgreen",
      description: "Backend development focuses on implementing business logic for applications."
    },
    {
      name: "Concurrency & C Programming",
      path: "/Portfolio/skills/concurrency",
      class: "orange",
      description: "Implementation of parallel execution and synchronization techniques in C."
    },
    {
      name: "Game AI & Pathfinding",
      path: "/Portfolio/skills/pathfinding",
      class: "red",
      description: "Design of intelligent agents and optimal navigation algorithms for games."
    },
    {
      name: "Version Control",
      path: "/Portfolio/skills/version-control",
      class: "green",
      description: "Management of code revisions and collaboration workflows using Git."
    },
    {
      name: "Type safety",
      path: "/Portfolio/skills/type-safety",
      class: "purple",
      description: "Ensuring correctness through strict adherence to type constraints in code."
    },
    {
      name: "Full stack",
      path: "/Portfolio/skills/full-stack",
      class: "yellow",
      description: "Full stack development is the process of developing both the frontend and the backend of an application."
    },
    {
      name: "SQL",
      path: "/Portfolio/skills/sql",
      class: "skyblue",
      description: "SQL (structured query language) is a language designed for efficiently searching databases."
    },
    {
      name: "Object Oriented Programming",
      path: "/Portfolio/skills/object-oriented-programming",
      class: "orange",
      description: "Object oriented programming is a data-centric design paradigm that represents software in terms of interactions between objects."
    },
    {
      name: "Modular Programming",
      path: "/Portfolio/skills/modular-programming",
      class: "blue",
      description: "Separation of concerns by organizing logic into distinct functions."
    },
    {
      name: "Event Driven Architecture",
      path: "/Portfolio/skills/event-driven-architecture",
      class: "orange",
      description: "A software design pattern where applications react to events occurring within a system, rather than relying on direct requests and responses"
    },
    {
      name: "Game Development",
      path: "/Portfolio/skills/game-development",
      class: "yellow",
      description: "The process of creating interactive games, encompassing everything from conceptualizing the game idea to its final release and beyond."
    },
    {
      name: "Data Manipulation",
      path: "/Portfolio/skills/data-manipulation",
      class: "red",
      description: "Transforming, cleaning, organizing, and restructuring raw data into a usable format for analysis and insights."
    },
    {
      name: "Data Visualization",
      path: "/Portfolio/skills/data-visualization",
      class: "skyblue",
      description: "The representation of data through use of common graphics, such as charts, plots, infographics and even animations."
    },
    {
      name: "Statistical Analysis",
      path: "/Portfolio/skills/statistical analysis",
      class: "pink",
      description: "It refers to investigating trends, patterns, and relationships using quantitative data."
    }
  ];
  const each_array = ensure_array_like(sections);
  Header($$payload, { path: "skills" });
  $$payload.out += `<!----> <main class="container"><h2>Technical Skills</h2> <p>Here are some of my strongest skill areas in computing.</p> <div class="cards"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<a${attr("href", section.path)}${attr_class("card " + section.class, "svelte-1qvdj0t")}><h3>${escape_html(section.name)}</h3> <p>${escape_html(section.description)}</p></a>`;
  }
  $$payload.out += `<!--]--></div></main>`;
}
export {
  _page as default
};
