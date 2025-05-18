import { e as escape_html } from "../../../../chunks/index.js";
import "clsx";
import { H as Header } from "../../../../chunks/Header.js";
function _page($$payload) {
  const project = {
    title: "Pathfinding Algorithms",
    description: "a way for computers to find the best path between two points in a map or environment. Including Dijkstra, A* and other Best-first Search algorithms."
  };
  Header($$payload, { path: "skills/pathfinding" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p></main>`;
}
export {
  _page as default
};
