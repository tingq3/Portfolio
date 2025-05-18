import { e as escape_html } from "../../../../chunks/index.js";
import "clsx";
import { H as Header } from "../../../../chunks/Header.js";
function _page($$payload) {
  const project = {
    title: "Statistical Analysis",
    description: "Statistical analysis means investigating trends, patterns, and relationships using quantitative data."
  };
  Header($$payload, { path: "skills/statistical-analysis" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p></main>`;
}
export {
  _page as default
};
