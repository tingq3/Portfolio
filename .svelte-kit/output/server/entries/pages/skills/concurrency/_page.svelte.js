import { e as escape_html } from "../../../../chunks/index.js";
import "clsx";
import { H as Header } from "../../../../chunks/Header.js";
function _page($$payload) {
  const project = {
    title: "Concurrency",
    description: "Concurrency refers to the ability of a system to execute multiple tasks or processes at the same time"
  };
  Header($$payload, { path: "skills/concurrency" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p></main>`;
}
export {
  _page as default
};
