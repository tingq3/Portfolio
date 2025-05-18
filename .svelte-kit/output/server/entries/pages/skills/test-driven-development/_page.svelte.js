import { e as escape_html } from "../../../../chunks/index.js";
import "clsx";
import { H as Header } from "../../../../chunks/Header.js";
function _page($$payload) {
  const project = {
    title: "Test Driven Development",
    description: "Test-driven development is the process of using testing to validate software as it is being written."
  };
  Header($$payload, { path: "skills/test-driven-development" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p></main>`;
}
export {
  _page as default
};
