import { e as escape_html } from "../../../../chunks/index.js";
import "clsx";
import { H as Header } from "../../../../chunks/Header.js";
function _page($$payload) {
  const project = {
    title: "Version Control",
    description: "Version Control refers to the practice of tracking and managing changes to software code, documents, or other files over time."
  };
  Header($$payload, { path: "skills/version-control" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p></main>`;
}
export {
  _page as default
};
