import { f as ensure_array_like, h as attr, i as attr_class, e as escape_html } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
function _page($$payload) {
  const sections = [
    {
      name: "Minifolio",
      path: "/projects/minifolio",
      class: "pink",
      img: "/minifolio.png",
      description: "A SvelteKit-based content management system powering this very portfolio."
    },
    {
      name: "Dungeon Mania",
      path: "/projects/dungeonmania",
      class: "blue",
      img: "/dungeonmania.png",
      description: "Dungeon Mania is a dungeon crawler game featuring interactive items, craftable gear, and dynamic enemies that can equip and utilize items."
    },
    {
      name: "2048 in C",
      path: "/projects/2048",
      class: "orange",
      img: "/2048.png",
      description: "Recreated the classic 2048 game in C."
    },
    {
      name: "Kahoot Simulation",
      path: "/projects/event-system",
      class: "red",
      img: "/quiz.png",
      description: "Simulated topics, producers, and consumers with command-line interaction, partitioning, and load balancing logic."
    },
    {
      name: "Train & Load Simulator",
      path: "/projects/train-sim",
      class: "purple",
      img: "/train_sim.png",
      description: "A Java simulation of trains and cargo loading with object-oriented refactoring patterns."
    },
    {
      name: "Search Agent 2D",
      path: "/projects/agent-search",
      class: "yellow",
      img: "/search_agent.jpg",
      description: "A text-based search agent that explores a 2D grid using BFS and backtracking, collecting items and avoiding dead ends."
    }
  ];
  const each_array = ensure_array_like(sections);
  Header($$payload, { path: "projects" });
  $$payload.out += `<!----> <main class="container"><h2>Projects I've Built</h2> <p>Here are some projects that highlight my technical experience.</p> <div class="cards"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<a${attr("href", section.path)}${attr_class("card " + section.class)}><img${attr("src", section.img)}${attr("alt", section.name + " image")} class="card-img"> <div class="card-content"><h3>${escape_html(section.name)}</h3> <p>${escape_html(section.description)}</p></div></a>`;
  }
  $$payload.out += `<!--]--></div></main>`;
}
export {
  _page as default
};
